import React from 'react';
// import { extend } from '@react-three/fiber';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Text3D } from '@react-three/drei';
import pressStart from '../../assets/fonts/PressStart2P_Regular.json';

function MyText() {
  return (
    <Text3D font={pressStart} position={[-11, 0, 3]}>
      Thomas Henderson
      <meshNormalMaterial />
    </Text3D>
  );
}

export default MyText;
