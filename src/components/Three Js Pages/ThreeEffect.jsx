/* Dependencies -
    1)  npm install three (must requied)
    2) npm install --save-dev @types/three (if you use Typescript in React Vite)

    Note - If any command is depriciated then, use attach "--force" at the end of each command   
*/

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

const ThreeEffect = () => {
  const mountRef = useRef(null);
  const mouse = { x: 0, y: 0 };

  useEffect(() => {
    let scene, camera, renderer, composer, controls, pointLight;
    const ribbons = [];
    const ribbonCount = 12;
    let group = new THREE.Group();

    function init() {
      // Scene and Camera setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      camera.position.set(0, 0, 40);

      // OrbitControls: Enable but disable buttons
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; // Enables smooth movement
      controls.enableZoom = false;
      controls.enableRotate = false;
      controls.enablePan = false;
      controls.enableKeys = false;

      // Lighting for glowing effect
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Soft ambient light
      scene.add(ambientLight);

      pointLight = new THREE.PointLight(0xffffff, 1, 100); // Strong point light
      pointLight.position.set(50, 50, 50);
      scene.add(pointLight);

      // Postprocessing
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight), 
        2.0, // Stronger bloom effect
        1.0, // Smooth glow spread
        0.0  // Glow starts immediately (no threshold)
      );
      composer.addPass(bloomPass);

      // Add the group to the scene
      scene.add(group);
      createRibbons();

      // Handle mouse movement
      window.addEventListener('mousemove', onMouseMove, false);

      // Handle window resize
      window.addEventListener('resize', onWindowResize, false);
    }

    // Create ribbons with glowing material
    function createRibbons() {
      for (let i = 0; i < ribbonCount; i++) {
        const geometry = new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, 0),
            new THREE.Vector3(-5, 5, 5),
            new THREE.Vector3(0, 0, 10),
            new THREE.Vector3(5, -5, 5),
            new THREE.Vector3(10, 0, 0),
          ]),
          400,
          Math.random() * 0.5 + 0.3, // Ribbon thickness
          20, // Ribbon segments
          true
        );
    
        // Randomized vibrant material colors
        const hue = Math.random() * 360;
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(`hsl(${hue}, 100%, 50%)`), // Vibrant color
          emissive: new THREE.Color(`hsl(${hue}, 100%, 20%)`), // Soft glow
          emissiveIntensity: 2.5, // Glow intensity
          side: THREE.DoubleSide,
          roughness: 0.5, // Slight reflection for better highlights
          metalness: 0.1,
        });
    
        const ribbon = new THREE.Mesh(geometry, material);
        ribbon.position.set(
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5
        );
    
        group.add(ribbon);
        ribbons.push(ribbon);
      }
    }
    

    // Mouse movement handler
    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update ribbon colors based on mouse position
      ribbons.forEach((ribbon, index) => {
        const hue = (mouse.x * 360 + index * 30) % 360; // Change hue based on mouse movement
        ribbon.material.color.setHSL(hue / 360, 1, 0.3); // Set color using HSL
      });
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ribbons.forEach((ribbon) => {
        ribbon.rotation.x += 0.01;
        ribbon.rotation.y += 0.01;
      });
      composer.render();
    }

    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    }

    init();
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={mountRef} className="relative w-full h-screen overflow-hidden">
      {/* <h3 className="absolute top-5 left-5 text-white text-sm">three.js + glowing ribbons</h3>
      <h3 className="absolute bottom-5 left-5 text-white text-sm">Move your mouse to change ribbon colors</h3>
      <h3 className="absolute bottom-5 right-5 text-white text-sm cursor-pointer" onClick={() => document.documentElement.requestFullscreen()}>Fullscreen on</h3> */}
    </div>
  );
};

export default ThreeEffect;
