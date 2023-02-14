import React from 'react';
import { useFrame } from '@react-three/fiber';
// import Controls from './Controls';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import MyCube from './MyCube';
import MySphere from './MySphere';
import { angleToRadians } from '../../utils';
import MyFloor from './MyFloor';
import * as THREE from 'three';
import { ElfFemale } from '../Models/EflFemale';

interface Props {
  isCameraMoving: boolean;
}

export default function MyScene(props: Props) {
  const { isCameraMoving } = props;
  const orbitControlsRef = React.useRef(null);

  useFrame((state) => {
    if (orbitControlsRef.current && isCameraMoving) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(180));
      orbitControlsRef.current.setPolarAngle((y + 2.5) * angleToRadians(30));
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[-20, 5, 20]} />
      {/* <Controls /> */}
      {/* <CameraControls /> */}
      <OrbitControls ref={orbitControlsRef} />
      <ambientLight
        // color={'purple'}
        args={[
          '#ffffff', // color
          0.25, // intensity
        ]}
      />
      <directionalLight
        color={'white'}
        position={[-10, 8, -4]}
        intensity={1}
        castShadow
      />
      {/* <pointLight position={[10, 10, 10]} castShadow /> */}
      <MySphere position={[-5, 5, 0]} />
      <MyCube />
      <MyFloor />
      <ElfFemale />
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color='#35b3c9' side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}
