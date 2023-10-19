import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");

  return (
    <primitive 
      object={earth.scene} 
      scale={2.4} 
      position-y={0} 
      rotation-y={0}
      castShadow   // To allow the object to cast shadows
      receiveShadow // To allow the object to receive shadows
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.01,
        far: 200,
        position: [-10, 5, 12],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        {/* Adding lights */}
        <ambientLight intensity={2} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={30}  // Reduced intensity
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          castShadow 
          shadow-camera-left={-10}  // Adjust these values for a larger shadow camera area
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.3} castShadow />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
