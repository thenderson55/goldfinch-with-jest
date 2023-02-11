import React from 'react';
import { useFrame } from '@react-three/fiber';
// import Controls from './Controls';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import MyCube from './MyCube';
import MySphere from './MySphere';
import { angleToRadians } from '../../utils';

export default function MyScene() {
  const orbitControlsRef = React.useRef(null);

  useFrame((state) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(180));
      orbitControlsRef.current.setPolarAngle((y + 2.5) * angleToRadians(30));
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault={true} position={[-20, 5, 20]} />
      {/* <Controls /> */}
      {/* <CameraControls /> */}
      <OrbitControls ref={orbitControlsRef} />
      <ambientLight color={'pink'} />
      <pointLight position={[10, 10, 10]} castShadow />
      <MySphere position={[-10, 5, -10]} />
      <MyCube />

      <mesh position={[0, -3, 0]} receiveShadow={true}>
        <boxBufferGeometry args={[20, 1, 10]} />
        <meshPhysicalMaterial color='green' />
      </mesh>
    </>
  );
}
