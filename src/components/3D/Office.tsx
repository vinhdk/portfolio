'use client';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import CanvasLoader from '../common/CanvasLoader';
import AvatarModel from './AvatarModel';
import WorkSpaceModel from './WorkSpaceModel';

const Office = ({ 
  modelUrl,
  props
}: { modelUrl: string, props: JSX.IntrinsicElements['group'] }) => {
  const controlsRef = useRef(null);

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-3, 1.5, 2]} />
      <ambientLight intensity={0.1} />
      <OrbitControls
        ref={controlsRef}
        // enablePan={false}
        // enableRotate={false}
        // minDistance={2}
        // maxDistance={10}
      />
      <Suspense fallback={<CanvasLoader />}>
        <group {...props}>
          <AvatarModel animation="typing" modelUrl={modelUrl} scale={0.8} />
          <WorkSpaceModel />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Office;
