import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import AvatarModel from './AvatarModel';
import PianoModel from './Piano';

type PlayingPianoProps = JSX.IntrinsicElements['group'] & {
  modelUrl: string;
};

const PlayingPiano = ({ modelUrl, ...props }: PlayingPianoProps) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[-2.5, 1, -1.5]} fov={30}/>
      <group {...props} dispose={null}>
        <AvatarModel animation="playingPiano" scale={1.35} modelUrl={modelUrl}/>
        <PianoModel rotation={[0, -Math.PI, 0]} position={[1, -1.05, -1]} scale={1.2}/>
      </group>
    </Canvas>
  );
};

export default PlayingPiano;
