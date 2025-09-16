import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import FloatingIcon from "./FloatingIcon";
import { Suspense } from "react";

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00FFFF" intensity={1} />
          <pointLight position={[-10, -10, 10]} color="#FF1493" intensity={1} />
          
          {/* Floating 3D Icons */}
          <FloatingIcon position={[-3, 2, 0]} color="#00FFFF" shape="sphere" />
          <FloatingIcon position={[3, -1, 0]} color="#FF1493" shape="box" />
          <FloatingIcon position={[0, 3, -2]} color="#9932CC" shape="torus" />
          <FloatingIcon position={[-2, -2, 1]} color="#00FF00" shape="sphere" />
          <FloatingIcon position={[2, 1, -1]} color="#FFD700" shape="box" />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;