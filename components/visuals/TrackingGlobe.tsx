"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type TrackingGlobeProps = {
  className?: string;
};

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function createArcCurve(start: THREE.Vector3, end: THREE.Vector3, lift = 0.35) {
  const mid = start.clone().add(end).multiplyScalar(0.5);
  mid.normalize().multiplyScalar(start.length() * (1 + lift));
  return new THREE.QuadraticBezierCurve3(start, mid, end);
}

export default function TrackingGlobe({ className = "" }: TrackingGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallScreen = window.innerWidth < 768;
    if (reduceMotion || (coarsePointer && smallScreen)) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 480;
    const height = mount.clientHeight || 360;
    const isMobile = width < 640;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.15, isMobile ? 3.6 : 3.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75));
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.setAttribute("aria-hidden", "true");

    const root = new THREE.Group();
    scene.add(root);

    const radius = 1.05;
    const globeGeometry = new THREE.SphereGeometry(radius, isMobile ? 32 : 48, isMobile ? 32 : 48);
    const globeMaterial = new THREE.MeshStandardMaterial({
      color: 0xdbeafe,
      roughness: 0.42,
      metalness: 0.08,
      transparent: true,
      opacity: 0.88
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    root.add(globe);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(radius * 1.002, 24, 18)),
      new THREE.LineBasicMaterial({ color: 0x1266e3, transparent: true, opacity: 0.18 })
    );
    root.add(wire);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.08, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide
      })
    );
    root.add(atmosphere);

    const hubs = [
      { lat: 34.05, lng: -118.25 },
      { lat: 40.71, lng: -74.0 },
      { lat: 51.5, lng: -0.12 },
      { lat: 31.23, lng: 121.47 },
      { lat: 1.35, lng: 103.82 },
      { lat: -23.55, lng: -46.63 },
      { lat: 28.61, lng: 77.21 },
      { lat: 25.2, lng: 55.27 }
    ];

    const hubGroup = new THREE.Group();
    const hubGeom = new THREE.SphereGeometry(0.028, 12, 12);
    const hubMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    hubs.forEach((hub) => {
      const mesh = new THREE.Mesh(hubGeom, hubMat);
      mesh.position.copy(latLngToVector3(hub.lat, hub.lng, radius * 1.01));
      hubGroup.add(mesh);
    });
    root.add(hubGroup);

    const routes: Array<{ curve: THREE.QuadraticBezierCurve3; packet: THREE.Mesh; progress: number; speed: number }> =
      [];
    const routePairs = [
      [0, 2],
      [3, 1],
      [4, 0],
      [6, 2],
      [7, 1],
      [5, 0]
    ];
    const packetGeom = new THREE.BoxGeometry(0.05, 0.035, 0.05);
    const packetMat = new THREE.MeshStandardMaterial({
      color: 0x1266e3,
      emissive: 0x0d56c3,
      emissiveIntensity: 0.35,
      roughness: 0.4,
      metalness: 0.2
    });

    routePairs.forEach(([from, to], index) => {
      const start = latLngToVector3(hubs[from].lat, hubs[from].lng, radius * 1.01);
      const end = latLngToVector3(hubs[to].lat, hubs[to].lng, radius * 1.01);
      const curve = createArcCurve(start, end, 0.28 + (index % 3) * 0.06);
      const points = curve.getPoints(isMobile ? 40 : 64);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color: 0x1266e3, transparent: true, opacity: 0.45 })
      );
      root.add(line);

      const packet = new THREE.Mesh(packetGeom, packetMat);
      root.add(packet);
      routes.push({
        curve,
        packet,
        progress: index / routePairs.length,
        speed: 0.08 + (index % 3) * 0.025
      });
    });

    const particlesCount = isMobile ? 80 : 140;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i += 1) {
      const r = radius * (1.2 + Math.random() * 0.7);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeom,
      new THREE.PointsMaterial({
        color: 0x94a3b8,
        size: isMobile ? 0.012 : 0.016,
        transparent: true,
        opacity: 0.55,
        depthWrite: false
      })
    );
    root.add(particles);

    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 2, 4);
    const fill = new THREE.DirectionalLight(0xfbbf24, 0.35);
    fill.position.set(-2, -1, 2);
    scene.add(ambient, key, fill);

    let frameId = 0;
    let running = true;
    const clock = new THREE.Clock();
    const pointer = { x: 0, y: 0 };

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };
    mount.addEventListener("pointermove", onPointerMove, { passive: true });

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) clock.start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const resizeObserver = new ResizeObserver(() => {
      const nextWidth = mount.clientWidth;
      const nextHeight = mount.clientHeight;
      if (!nextWidth || !nextHeight) return;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight, false);
    });
    resizeObserver.observe(mount);

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      if (!running) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      root.rotation.y += delta * 0.18;
      root.rotation.x = THREE.MathUtils.lerp(root.rotation.x, pointer.y * 0.12, 0.04);
      root.rotation.z = THREE.MathUtils.lerp(root.rotation.z, -pointer.x * 0.08, 0.04);
      particles.rotation.y -= delta * 0.05;

      routes.forEach((route) => {
        route.progress = (route.progress + delta * route.speed) % 1;
        const point = route.curve.getPoint(route.progress);
        route.packet.position.copy(point);
        const tangent = route.curve.getTangent(route.progress).normalize();
        route.packet.lookAt(point.clone().add(tangent));
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      running = false;
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", onVisibility);
      mount.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      globeGeometry.dispose();
      globeMaterial.dispose();
      hubGeom.dispose();
      hubMat.dispose();
      packetGeom.dispose();
      packetMat.dispose();
      particleGeom.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return (
      <div
        className={`hero-globe-fallback ${className}`}
        aria-hidden="true"
      />
    );
  }

  return <div ref={mountRef} className={`hero-globe-canvas ${className}`} aria-hidden="true" />;
}
