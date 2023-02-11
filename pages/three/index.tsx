import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styles from './index.module.scss';
// import Controls from './Controls';
import {
  CameraControls,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import MyCube from '../../components/Three/MyCube';
import MySphere from '../../components/Three/MySphere';
import Link from 'next/link';
import MyScene from '../../components/Three/MyScene';

export default function Three() {
  // Click on canvas and toggle camera move with mouse
  const [isCameraMoving, setIsCameraMoving] = React.useState(false);

  return (
    <div className={styles.scene}>
      <Canvas
        shadows
        className={styles.canvas}
        // onClick={(e) => console.log(e)}
        onClick={() => setIsCameraMoving(!isCameraMoving)}

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
          {/* <Html center>
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
          </Html> */}
          <MyScene isCameraMoving={isCameraMoving} />
        </Suspense>
      </Canvas>
    </div>
  );
}
