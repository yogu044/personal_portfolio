import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface FloatingIconProps {
  position: [number, number, number];
  color: string;
  shape: "sphere" | "box" | "torus";
}

const FloatingIcon = ({ position, color, shape }: FloatingIconProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const renderGeometry = () => {
    switch (shape) {
      case "sphere":
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case "box":
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case "torus":
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

export default FloatingIcon;