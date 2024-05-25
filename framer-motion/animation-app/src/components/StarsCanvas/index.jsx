import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random/dist/maath-random.esm";

const StarBackground = ({ positions }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} frustumCulled>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const sphere = inSphere(new Float32Array(5000), { radius: 1.2 });

  return (
    <div className="w-full h-auto fixed inset-0 z-[20]" style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground positions={sphere} />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
