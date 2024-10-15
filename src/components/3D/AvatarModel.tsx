'use client';

import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useGraph } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AnimationClip } from 'three';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type GLTFAction = {
  name: string;
  keys: {
    time: number;
    value: THREE.Vector3 | THREE.Quaternion | THREE.Vector4;
  }[];
};

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Glasses: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Glasses: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type AvatarModelProps = JSX.IntrinsicElements['group'] & {
  animation?: 'typing' | 'playingPiano' | 'greeting' | 'laying' | null;
  modelUrl: string;
};

function retargetClip(
  clip: AnimationClip,
  targetNames: string[]
): AnimationClip {
  const newClip = clip.clone();
  newClip.tracks = newClip.tracks.filter(track =>
    targetNames.some(name => track.name.startsWith(name))
  );
  return newClip;
}

export const AvatarModel: React.FC<AvatarModelProps> = ({
  animation,
  modelUrl,
  ...props
}) => {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelUrl) as GLTFResult;
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;

  const { animations: typingAnimation } = useFBX(
    '/models/animations/typing.fbx'
  );

  const { animations: playingPianoAnimation } = useFBX(
    '/models/animations/playing_piano.fbx'
  );

  const { animations: greetingAnimation } = useFBX(
    '/models/animations/greeting.fbx'
  );

  const { animations: layingAnimation } = useFBX(
    '/models/animations/male_laying_pose.fbx'
  );

  typingAnimation[0].name = 'typing';
  playingPianoAnimation[0].name = 'playingPiano';
  greetingAnimation[0].name = 'greeting';
  layingAnimation[0].name = 'laying';

  const retargetedAnimations = React.useMemo(() => {
    const targetNames = Object.keys(nodes);
    return [
      typingAnimation[0],
      playingPianoAnimation[0],
      greetingAnimation[0],
      layingAnimation[0],
    ].map(clip => retargetClip(clip, targetNames));
  }, [
    nodes,
    typingAnimation,
    playingPianoAnimation,
    greetingAnimation,
    layingAnimation,
  ]);

  const { actions } = useAnimations(retargetedAnimations, group);

  useEffect(() => {
    // Stop all animations
    Object.values(actions).forEach(action => action?.stop());

    // Play the selected animation
    switch (animation) {
      case 'typing':
        actions['typing']?.reset().play();
        break;
      case 'playingPiano':
        actions['playingPiano']?.reset().play();
        break;
      case 'greeting':
        actions['greeting']?.reset().play();
        break;
      case 'laying':
        actions['laying']?.reset().play();
        break;
      // No default case needed as we've stopped all animations already
    }
  }, [animation, actions]);

  return (
    <group
      {...props}
      ref={group}
      dispose={null}
      position-y={-1}
      rotation-x={-Math.PI / 2}>
      <ambientLight intensity={1.5} />
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload('/models/fixed/minh.glb');

export default AvatarModel;
