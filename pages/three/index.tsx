import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './index.module.scss';
// import Controls from './Controls';
import {
  CameraControls,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import MyCube from './MyCube';
import MySphere from './MySphere';
import Link from 'next/link';

export default function Three() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        // camera={{
        //   position: [-6, 7, 10],
        // }}
      >
        <Suspense
          fallback={
            <Html center>
              <div style={{ color: 'pink', fontWeight: 'bold', fontSize: 24 }}>
                PLEASE WAIT
              </div>
            </Html>
          }
        >
          <Html center>
            <Link
              href='/'
              style={{
                color: 'pink',
                fontWeight: 'bold',
                fontSize: 24,
                letterSpacing: 30,
                textDecoration: 'none',
              }}
            >
              HOOOOOME
            </Link>
          </Html>
          <PerspectiveCamera makeDefault={true} position={[-20, 5, 20]} />
          {/* <Controls /> */}
          <CameraControls />
          {/* <OrbitControls /> */}
          <ambientLight color={'pink'} />
          <pointLight position={[10, 10, 10]} castShadow />
          <MySphere position={[-10, 5, -10]} />
          <MyCube />

          <mesh position={[0, -3, 0]} receiveShadow={true}>
            <boxBufferGeometry args={[20, 1, 10]} />
            <meshPhysicalMaterial color='green' />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
