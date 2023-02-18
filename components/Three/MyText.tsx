import React, { useRef } from 'react';
import { Center, Float, Text3D } from '@react-three/drei';
import pressStart from '../../assets/fonts/PressStart2P_Regular.json';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three/src/Three';

function MyText() {
  const meshRef = React.useRef<Mesh>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <Center position={[0, 0, 7]}>
      <Float
        // rotation={[3, 5, 6]}
        speed={3}
        floatIntensity={5}
      >
        <Text3D
          ref={meshRef}
          // @ts-ignore
          font={pressStart}
          bevelEnabled
          bevelThickness={0.3}
        >
          Thomas Henderson
          <meshNormalMaterial />
        </Text3D>
      </Float>
    </Center>
  );
}

export default MyText;
