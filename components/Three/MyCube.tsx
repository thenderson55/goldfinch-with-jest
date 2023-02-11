import { useFrame, Vector3 } from '@react-three/fiber';
import React from 'react';
import { Mesh } from 'three';

interface Props {
  position?: Vector3;
  args?: number[];
}

function MyCube(props: Props) {
  const { position, args } = props;
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
      position={position ? position : [0, 0, 0]}
      receiveShadow
      castShadow
    >
      <boxBufferGeometry args={args ? args : [1, 1, 1]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  );
}

export default MyCube;
