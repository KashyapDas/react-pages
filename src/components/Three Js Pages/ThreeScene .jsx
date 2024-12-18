/* Dependencies

    # Install three.js for 3D rendering
    npm install three

    # Install dat.gui for GUI controls
    npm install dat.gui

    # Install gsap for animations
    npm install gsap

    # Optional: Install TypeScript type definitions if you're using TypeScript
    npm install --save-dev @types/three @types/dat.gui

*/

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
import { GUI } from 'dat.gui';
import { gsap } from 'gsap';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const ribbons = useRef([]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    camera.position.set(0, 0, 40);

    const composer = new EffectComposer(renderer);

    const ribbonCount = 12;
    const group = new THREE.Group();
    scene.add(group);

    const light = new THREE.AmbientLight(0xff0000, 1);
    scene.add(light);

    const pointLight = new THREE.PointLight(0xff0000, 1, 100);
    pointLight.position.set(50, 50, 50);
    pointLight.castShadow = true;
    scene.add(pointLight);

    pointLight.shadow.mapSize.width = 512; // default
    pointLight.shadow.mapSize.height = 512; // default
    pointLight.shadow.camera.near = 0.5; // default
    pointLight.shadow.camera.far = 500; // default

    const createRibbons = () => {
      for (let i = 0; i < ribbonCount; i++) {
        const geometry = new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, 0),
            new THREE.Vector3(-5, 5, 5),
            new THREE.Vector3(0, 0, 10),
            new THREE.Vector3(5, -5, 5),
            new THREE.Vector3(10, 0, 0),
            new THREE.Vector3(5, 5, -5),
            new THREE.Vector3(0, 0, -10),
            new THREE.Vector3(-5, -5, -5),
            new THREE.Vector3(-10, 0, 0),
          ], true), 400, Math.random() * 0.5 + 0.1, Math.random() * 0.5 + 12, true
        );

        const material = new THREE.MeshBasicMaterial({
          color: Math.random() * 0xffffff, 
          side: THREE.DoubleSide,
        });
        const ribbon = new THREE.Mesh(geometry, material);

        ribbon.position.set(
          -(Math.random() * 10 - 5),
          -(Math.random() * 10 - 5),
          -(Math.random() * 10 - 5)
        );
        ribbon.rotation.set(
          Math.random() * 30 - 5,
          Math.random() * 30 - 5,
          Math.random() * 30 - 5
        );

        ribbons.current.push(ribbon);
        group.add(ribbon);
      }
    };

    createRibbons();

    const changeRibbonColors = () => {
      ribbons.current.forEach((ribbon) => {
        ribbon.material.color.set(Math.random() * 0xffffff);
      });
    };

    // Set interval to change colors every 0.5 seconds (500ms)
    const intervalId = setInterval(changeRibbonColors, 500);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.5, 2, 0
    );
    composer.addPass(bloomPass);

    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();
      ribbons.current.forEach((ribbon) => {
        ribbon.rotation.x += 0.01;
        ribbon.rotation.y += 0.01;
      });
    };

    animate();

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
