import { Vector3 } from '@react-three/fiber';
import React from 'react';

interface Props {
  position?: Vector3;
  args?: number[];
}

function MyFloor(props: Props) {
  const { position, args } = props;
  return (
    <mesh position={position ? position : [0, -3, 0]} receiveShadow>
      <boxBufferGeometry args={args ? args : [20, 1, 10]} />
      <meshPhysicalMaterial color='green' />
    </mesh>
  );
}

export default MyFloor;
