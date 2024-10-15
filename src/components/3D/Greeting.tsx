import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../common/CanvasLoader';
import AvatarModel from './AvatarModel';

type GreetingProps = JSX.IntrinsicElements['group'] & {
  modelUrl: string;
};

const Greeting = ({ modelUrl, ...props }: GreetingProps) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 8, 8]} fov={8} />
      <Suspense fallback={<CanvasLoader />}>
        <group {...props}>
          <AvatarModel animation="greeting" modelUrl={modelUrl} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Greeting;
