import { Canvas } from '@react-three/fiber';
import styles from './index.module.scss';

export default function Home() {
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
        <mesh position={[0, -1, 0]} recieveShadow={true}>
          <boxBufferGeometry args={[20, 1, 10]} />
          <meshPhysicalMaterial color='white' />
        </mesh>
      </Canvas>
    </div>
  );
}
