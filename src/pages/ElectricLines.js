import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ElectricLines() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 10;

    // Light to make the lines visible
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create sphere positions (same as your circles)
    const positions = [
      { x: -4, y: 2, z: -3 },
      { x: 2, y: -1.5, z: -3.5 },
      { x: -2, y: -2, z: -2.5 },
      { x: 3, y: 1.5, z: -4 },
      { x: -1.5, y: -1, z: -4.5 },
    ];

    // Create the material for the lines (glowing effect)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff, // Electric blue color
      linewidth: 2,
    });

    // Function to generate a random connection between spheres
    const generateRandomLine = () => {
      const startIndex = Math.floor(Math.random() * positions.length);
      let endIndex = Math.floor(Math.random() * positions.length);
      while (endIndex === startIndex) {
        endIndex = Math.floor(Math.random() * positions.length);
      }

      const start = new THREE.Vector3(positions[startIndex].x, positions[startIndex].y, positions[startIndex].z);
      const end = new THREE.Vector3(positions[endIndex].x, positions[endIndex].y, positions[endIndex].z);

      const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
      const line = new THREE.Line(geometry, lineMaterial);

      scene.add(line);

      // Animate line deletion after some time (create the flicker effect)
      setTimeout(() => {
        scene.remove(line);
      }, 500 + Math.random() * 1000); // Random duration between 500ms to 1500ms
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Generate random electric lines periodically
      if (Math.random() < 0.05) {  // Adjust this value for more or fewer lines
        generateRandomLine();
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
}

export default ElectricLines;
