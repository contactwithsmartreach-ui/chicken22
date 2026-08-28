"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles } from "lucide-react";

export const BurgerAnatomy3D = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff3e0, 2.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffa000, 2, 50);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Create Procedural Realistic 3D Burger Layers
    const burgerGroup = new THREE.Group();
    scene.add(burgerGroup);

    // Materials
    const bunMaterial = new THREE.MeshStandardMaterial({
      color: 0xd47a2a,
      roughness: 0.6,
      bumpScale: 0.05,
    });
    const sesameMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5deb3,
      roughness: 0.4,
    });
    const pattyMaterial = new THREE.MeshStandardMaterial({
      color: 0x3d1c02,
      roughness: 0.9,
    });
    const cheeseMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      roughness: 0.3,
    });
    const lettuceMaterial = new THREE.MeshStandardMaterial({
      color: 0x388e3c,
      roughness: 0.7,
    });
    const tomatoMaterial = new THREE.MeshStandardMaterial({
      color: 0xd32f2f,
      roughness: 0.4,
    });

    // 1. Top Bun
    const topBunGeo = new THREE.SphereGeometry(2.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const topBun = new THREE.Mesh(topBunGeo, bunMaterial);
    topBun.scale.set(1, 0.5, 1);
    topBun.position.y = 2.8;

    // Add Sesame seeds on Top Bun
    for (let i = 0; i < 25; i++) {
      const seed = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.1, 4, 8), sesameMaterial);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * (Math.PI / 3);
      const r = 1.4 * Math.sin(phi);
      seed.position.set(r * Math.cos(theta), 2.9 + 1.1 * Math.cos(phi), r * Math.sin(theta));
      seed.rotation.x = Math.random() * Math.PI;
      seed.rotation.y = Math.random() * Math.PI;
      topBun.add(seed);
    }
    burgerGroup.add(topBun);

    // 2. Tomato Slices
    const tomatoGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const tGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 24);
      const tMesh = new THREE.Mesh(tGeo, tomatoMaterial);
      const angle = (i * Math.PI * 2) / 3;
      tMesh.position.set(Math.cos(angle) * 0.7, 1.6, Math.sin(angle) * 0.7);
      tomatoGroup.add(tMesh);
    }
    burgerGroup.add(tomatoGroup);

    // 3. Lettuce Leaf (Wavy disk)
    const lettuceGeo = new THREE.CylinderGeometry(2.1, 2.1, 0.15, 32);
    const lettuce = new THREE.Mesh(lettuceGeo, lettuceMaterial);
    lettuce.position.y = 1.0;
    burgerGroup.add(lettuce);

    // 4. Melted Cheese
    const cheeseGeo = new THREE.BoxGeometry(2.9, 0.08, 2.9);
    const cheese = new THREE.Mesh(cheeseGeo, cheeseMaterial);
    cheese.rotation.y = Math.PI / 4;
    cheese.position.y = 0.4;
    burgerGroup.add(cheese);

    // 5. Juicy Beef Patty
    const pattyGeo = new THREE.CylinderGeometry(2.3, 2.2, 0.5, 32);
    const patty = new THREE.Mesh(pattyGeo, pattyMaterial);
    patty.position.y = -0.3;
    burgerGroup.add(patty);

    // 6. Bottom Bun
    const bottomBunGeo = new THREE.CylinderGeometry(2.2, 2.0, 0.8, 32);
    const bottomBun = new THREE.Mesh(bottomBunGeo, bunMaterial);
    bottomBun.position.y = -1.2;
    burgerGroup.add(bottomBun);

    // Scroll Handler
    const handleScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from 0 (just entering view) to 1 (fully scrolled past)
      let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth rotation based on time & scroll
      burgerGroup.rotation.y += 0.005;

      // Calculate explosive disassembly distance based on scrollProgress
      // At progress = 0 (top of section), pieces are spread out far apart.
      // At progress = 1 (bottom of section), pieces snap together into the complete burger.
      const factor = (1 - scrollProgress) * 3.5;

      topBun.position.y = 2.8 + factor * 2.2;
      tomatoGroup.position.y = factor * 1.5;
      lettuce.position.y = 1.0 + factor * 0.8;
      cheese.position.y = 0.4 + factor * 0.2;
      patty.position.y = -0.3 - factor * 0.6;
      bottomBun.position.y = -1.2 - factor * 1.5;

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[85vh] bg-[#681403] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#EFB11D]/40 text-[#EFB11D] text-xs font-semibold tracking-widest uppercase shadow-xl">
          <Sparkles className="w-3.5 h-3.5" />
          Scroll to Assemble 3D Masterwork
        </div>
      </div>
    </div>
  );
};