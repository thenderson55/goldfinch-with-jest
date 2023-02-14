import { useFrame, Vector3 } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Mesh } from 'three';

interface Props {
  position?: Vector3;
  args?: number[];
}

function MyCube(props: Props) {
  const { position, args } = props;
  const meshRef = React.useRef<Mesh>();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      console.log('meshRef.current.position: ', meshRef.current.position);
      // create timeline and animate the square in from the top after 1 second
      const timeline = gsap.timeline();

      timeline.to(
        meshRef.current.position,
        {
          duration: 2,
          y: 0,
          x: 3,
        },
        1
      );
      console.log('meshRef.current.position 2: ', meshRef.current.position);

      timeline.to(
        [meshRef.current.rotation, meshRef.current.position],
        {
          duration: 2,
          x: -9,
          yoyo: true,
          repeat: -1,
        },
        3
      );

      timeline.play();
    }
  }, [meshRef]);

  return (
    <mesh
      ref={meshRef}
      position={position ? position : [3, 20, 0]}
      receiveShadow
      castShadow
    >
      <boxBufferGeometry args={args ? args : [1, 1, 1]} />
      <meshStandardMaterial color={'blue'} metalness={0.3} roughness={0.1} />
    </mesh>
  );
}

export default MyCube;
