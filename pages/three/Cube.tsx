import { useFrame } from '@react-three/fiber';
import React from 'react';
import { Mesh } from 'three';

function Cube() {
  const meshRef = React.useRef<Mesh>();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh
      ref={meshRef}
      // rotateX={3}
      // rotateY={0.2}
      // receiveShadow={true}
      // castShadow={true}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial color={'blue'} />
    </mesh>
  );
}

export default Cube;
