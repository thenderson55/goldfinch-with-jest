import React from 'react';
import { Float, Text3D } from '@react-three/drei';
import pressStart from '../../assets/fonts/PressStart2P_Regular.json';

function MyText() {
  return (
    <Float
      // rotation={[3, 5, 6]}
      speed={3}
      floatIntensity={5}
    >
      <Text3D
        // @ts-ignore
        font={pressStart}
        position={[-11, 0, 7]}
        bevelEnabled
        bevelThickness={0.3}
      >
        Thomas Henderson
        <meshNormalMaterial />
      </Text3D>
    </Float>
  );
}

export default MyText;
