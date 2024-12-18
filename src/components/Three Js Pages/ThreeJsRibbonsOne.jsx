/* Dependencies 
  
  # Install three.js
  npm install three

  # Optional: TypeScript types for three.js (if using TypeScript)
  npm install --save-dev @types/three

*/


import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import { DotScreenPass } from "three/examples/jsm/postprocessing/DotScreenPass";

const ThreeJsRibbonsOne = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Bloom pass
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.5, // bloomStrength
      2, // bloomRadius
      0 // bloomThreshold
    );
    composer.addPass(bloomPass);

    // Glitch and DotScreen passes
    const glitchPass = new GlitchPass();
    glitchPass.enabled = false;
    composer.addPass(glitchPass);

    const dotScreenPass = new DotScreenPass();
    dotScreenPass.enabled = false;
    composer.addPass(dotScreenPass);

    let ribbons = [];
    const group = new THREE.Group();
    scene.add(group);

    function createRibbons() {
      const ribbonCount = 12;
      for (let i = 0; i < ribbonCount; i++) {
        const geometry = new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(
            [
              new THREE.Vector3(-10, 0, 0),
              new THREE.Vector3(-5, 5, 5),
              new THREE.Vector3(0, 0, 10),
              new THREE.Vector3(5, -5, 5),
              new THREE.Vector3(10, 0, 0),
              new THREE.Vector3(5, 5, -5),
              new THREE.Vector3(0, 0, -10),
              new THREE.Vector3(-5, -5, -5),
              new THREE.Vector3(-10, 0, 0),
            ],
            true,
            "catmullrom",
            5
          ),
          400,
          Math.random() * 0.5 + 0.1,
          Math.random() * 0.5 + 12,
          true
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

        ribbons.push(ribbon);
        group.add(ribbon);
      }
    }
    createRibbons();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();
      controls.update(); // Update controls in the animation loop
      ribbons.forEach((ribbon) => {
        ribbon.rotation.x += 0.01;
        ribbon.rotation.y += 0.01;
        ribbon.position.x += Math.sin(ribbon.rotation.x) * 0.01;
        ribbon.position.y += Math.cos(ribbon.rotation.y) * 0.01;
      });
    };
    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", () => {});
      controls.dispose();

      // Dispose objects
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });

      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeJsRibbonsOne;
