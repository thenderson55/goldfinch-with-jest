import { Vector3 } from '@react-three/fiber';
import React from 'react';

interface Props {
  position?: Vector3;
  args?: number[];
}

function Sphere(props: Props) {
  const { position, args } = props;
  return (
    <mesh position={position ? position : [0, 3, 0]}>
      {/* <pointLight castShadow />  */}
      <sphereBufferGeometry args={args ? args : [0.2, 30, 10]} />
      <meshPhongMaterial emissive={'red'} />
    </mesh>
  );
}

export default Sphere;
