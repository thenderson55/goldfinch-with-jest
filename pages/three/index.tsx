import React from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './index.module.scss';
import Controls from './Controls';
import { CameraControls } from '@react-three/drei';

export default function Three() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={'white'} intensity={0.3} />
        <mesh position={[0, 3, 0]}>
          <pointLight castShadow />
          <sphereBufferGeometry args={[0.2, 30, 10]} />
          <meshPhongMaterial emissive={'yellow'} />
        </mesh>
        <mesh rotateX={3} rotateY={0.2} recieveShadow={true} castShadow={true}>
          <boxBufferGeometry />
          <meshPhysicalMaterial color={'white'} />
        </mesh>
        {/* <Controls /> */}
        <CameraControls />
        <mesh position={[0, -1, 0]} receiveShadow={true}>
          <boxBufferGeometry args={[20, 1, 10]} />
          <meshPhysicalMaterial color='white' />
        </mesh>
      </Canvas>
    </div>
  );
}
