import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../common/CanvasLoader';
import AvatarModel from './AvatarModel';

type LayingProps = JSX.IntrinsicElements['group'] & {
  modelUrl: string;
};

const Laying = ({ modelUrl, ...props }: LayingProps) => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={25} position={[1.5, 0.5, 6]} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Suspense fallback={<CanvasLoader />}>
        <AvatarModel animation="laying" modelUrl={modelUrl} {...props} />
      </Suspense>
    </Canvas>
  );
};

export default Laying;
