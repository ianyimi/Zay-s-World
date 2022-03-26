import { SpotLight, useDepthBuffer, useHelper } from "@react-three/drei"
import { GroupProps, useFrame, useThree} from "@react-three/fiber";
import {Object3D, Vector3, DirectionalLightHelper, DirectionalLight, Euler, SpotLightHelper} from "three";
import { useLimiter } from "spacesvr";
import {Dispatch, MutableRefObject, Ref, SetStateAction, useRef, useState} from "react";
import * as THREE from "three";

type LightProps = {
  position?: Vector3,
  rotation?: Euler,
} & GroupProps

export default function VolumetricLight(props: LightProps) {

  const { position = new Vector3(), rotation = new Euler(), ...restProps } = props
  const { scene } = useThree();
  const mesh = useRef<THREE.Mesh>();
  const [dummyObj, setDummyObj] = useState<Object3D>(new Object3D());
  const [dummyObj2, setDummyObj2] = useState<Object3D>(new Object3D());
  const [dummyObj3, setDummyObj3] = useState<Object3D>(new Object3D());
  // const dummyObj2 = new Object3D();
  // const dummyObj3 = new Object3D();
  dummyObj.position.set(0.13+position.x, position.y-5, position.z);
  dummyObj2.position.set(-0.15+position.x, position.y-5, position.z);
  dummyObj3.position.set(-0.02+position.x, position.y-5, position.z);
  // const dummyGroup = new THREE.Group();
  // dummyGroup.add(dummyObj),
  //   dummyGroup.add(dummyObj2),
  //   dummyGroup.add(dummyObj3);
  // dummyGroup.rotation.set(rotation.x, rotation.y, rotation.z)
  // dummyGroup.position.set(position.x, position.y, position.z)
  // setDu

  const light1 = useRef();
  scene.add(dummyObj3)
  // useHelper(light1, DirectionalLightHelper)

  // @ts-ignore
  const spLight1 = useRef<SpotLight | undefined>();
  // @ts-ignore
  const spLight2 = useRef<SpotLight | undefined>();
  // setObjectRefs([...objectRefs, mesh]);

  // useHelper(spLight1, SpotLightHelper)
  // useHelper(spLight2, SpotLightHelper)

  // positions are not at (0, 0) of the group. need to add these numbers to numbers passed into the component
  return (
    <group name="VolumetricLight" position={position} rotation={rotation} {...restProps}>
      <mesh ref={mesh}>
        <boxBufferGeometry args={[0.71, 0.06, 0.29]} />
        <meshStandardMaterial color={"white"} emissive={new THREE.Color("#ffffff")} emissiveIntensity={3} />
      </mesh>
      <directionalLight ref={light1} color="#ffffff" position={[-0.02, 0.13, 0]} intensity={0.005} target={dummyObj3} castShadow />
      <SpotLight ref={spLight1} color="#ffffff" angle={Math.PI/10} position={[0.13, 0, 0]} target={dummyObj} castShadow />
      <SpotLight ref={spLight2} color="#ffffff" angle={Math.PI/10} position={[-0.15, 0, 0]} target={dummyObj2} castShadow />
    </group>
  )
}
