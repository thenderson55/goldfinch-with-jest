import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './index.module.scss';
// import Controls from './Controls';
import { CameraControls } from '@react-three/drei';
import Cube from './Cube';

export default function Three() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 10],
        }}
      >
        <Suspense fallback={null}>
          <ambientLight color={'pink'} intensity={0.3} />
          <mesh position={[0, 3, 0]}>
            <pointLight castShadow />
            <sphereBufferGeometry args={[0.2, 30, 10]} />
            <meshPhongMaterial emissive={'red'} />
          </mesh>
          {/* <Controls /> */}
          <Cube />
          <CameraControls />
          <mesh position={[0, -1, 0]} receiveShadow={true}>
            <boxBufferGeometry args={[20, 1, 10]} />
            <meshPhysicalMaterial color='green' />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
