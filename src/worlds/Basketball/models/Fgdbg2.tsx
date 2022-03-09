/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import {useTrimeshCollision} from "spacesvr";
import {BufferGeometry} from "three";

type GLTFResult = GLTF & {
  nodes: {
    ['pro_1__-512_0_-512_to_516_255_424012']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424029']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424125']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424114']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424005']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424003']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424126']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424145']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424145_1']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424009']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424008']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424052']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424096']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424018_1']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424018_2']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424018_3']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_1']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_2']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_3']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_4']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_5']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_6']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_7']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424167_8']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424071']: THREE.Mesh
    ['pro_1__-512_0_-512_to_516_255_424002']: THREE.Mesh
  }
  materials: {
    Sand: THREE.MeshPhysicalMaterial
    ['Block_of_Gold.002']: THREE.MeshPhysicalMaterial
    ['Stained_Glass.002']: THREE.MeshPhysicalMaterial
    ['Stained_Glass_Pane.003']: THREE.MeshStandardMaterial
    ['Bone_Block.002']: THREE.MeshPhysicalMaterial
    ['Stained_Glass.001']: THREE.MeshPhysicalMaterial
    Colored_Terracotta: THREE.MeshStandardMaterial
    Oak_Planks: THREE.MeshStandardMaterial
    Stationary_Water: THREE.MeshStandardMaterial
    Water: THREE.MeshStandardMaterial
    Glowstone: THREE.MeshPhysicalMaterial
    Wall_Banner: THREE.MeshPhysicalMaterial
    Oak_Leaves: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
    Sunflower: THREE.MeshStandardMaterial
    Grass_Block: THREE.MeshStandardMaterial
    Terracotta: THREE.MeshStandardMaterial
    Wool: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
    Obsidian: THREE.MeshStandardMaterial
    Concrete: THREE.MeshStandardMaterial
    Stained_Glass: THREE.MeshStandardMaterial
    Diamond_Ore: THREE.MeshPhysicalMaterial
  }
}

const FILE_URL = "https://d1p3v0j4bqcb21.cloudfront.net/models/fgdbg2-1646711239/fgdbg2.glb.gz";

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult

  // useTrimeshCollision((nodes[`pro_1__-512_0_-512_to_516_255_424012`].geometry as BufferGeometry)
  //   .clone()
  //   .rotateX(Math.PI/2)
  //   .scale(0.1, 0.1, 0.1)
  //   .translate(-0.0134, -10.1689, -0.1388)
  // )

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Camera" position={[-487.2535, -4.4902, -883.1339]} rotation={[1.5539, 0.0094, 2.6318]} />
        <group name="Camera001" position={[-527.9275, 502.6167, -876.2213]} rotation={[1.9612, -0.2266, 2.6418]} />
        <group name="Sun" position={[11.0309, 18.8521, -6.5845]} rotation={[0.3311, 0.2624, 1.041]} />
        <group name="Sun001" position={[11.0309, 18.8521, -6.5845]} rotation={[0.3311, 0.2624, 1.041]} />
        <group name="Camera002" position={[-32.9439, 3.8148, -74.7951]} rotation={[1.4863, 0.0421, 2.6806]} />
        <group name="Sun002" position={[-33.4114, 35.6078, 30.3549]} rotation={[0.3039, 0.2769, 1.0868]} />
        <group name="Sun003" position={[-15.2522, 37.6478, 11.3708]} rotation={[0.5403, -0.6429, 1.2935]} />
        <group
          name="pro_1__-512_0_-512_to_516_255_424001"
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424012"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424012'].geometry}
          material={nodes['pro_1__-512_0_-512_to_516_255_424012'].material}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424029"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424029'].geometry}
          material={materials['Block_of_Gold.002']}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424125"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424125'].geometry}
          material={materials['Stained_Glass.002']}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424114"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424114'].geometry}
          material={materials['Stained_Glass_Pane.003']}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424005"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424005'].geometry}
          material={materials['Bone_Block.002']}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424003"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424003'].geometry}
          material={nodes['pro_1__-512_0_-512_to_516_255_424003'].material}
          position={[-29.2665, 7.401, -54.8287]}
          rotation={[Math.PI / 2, 0, 1.85]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424126"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424126'].geometry}
          material={materials['Stained_Glass.001']}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <group
          name="pro_1__-512_0_-512_to_516_255_424068"
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}>
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424145"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424145'].geometry}
            material={nodes['pro_1__-512_0_-512_to_516_255_424145'].material}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424145_1"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424145_1'].geometry}
            material={nodes['pro_1__-512_0_-512_to_516_255_424145_1'].material}
          />
        </group>
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424009"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424009'].geometry}
          material={materials.Stationary_Water}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424008"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424008'].geometry}
          material={materials.Water}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424052"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424052'].geometry}
          material={materials.Glowstone}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424096"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424096'].geometry}
          material={materials.Wall_Banner}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <group
          name="pro_1__-512_0_-512_to_516_255_424018"
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}>
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424018_1"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424018_1'].geometry}
            material={materials.Oak_Leaves}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424018_2"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424018_2'].geometry}
            material={materials.Grass}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424018_3"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424018_3'].geometry}
            material={materials.Sunflower}
          />
        </group>
        <group
          name="pro_1__-512_0_-512_to_516_255_424026"
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}>
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167'].geometry}
            material={materials.Grass_Block}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_1"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_1'].geometry}
            material={nodes['pro_1__-512_0_-512_to_516_255_424167_1'].material}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_2"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_2'].geometry}
            material={nodes['pro_1__-512_0_-512_to_516_255_424167_2'].material}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_3"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_3'].geometry}
            material={materials.Terracotta}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_4"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_4'].geometry}
            material={materials.Wool}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_5"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_5'].geometry}
            material={materials.Stone}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_6"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_6'].geometry}
            material={materials.Dirt}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_7"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_7'].geometry}
            material={materials.Obsidian}
          />
          <mesh
            name="pro_1__-512_0_-512_to_516_255_424167_8"
            geometry={nodes['pro_1__-512_0_-512_to_516_255_424167_8'].geometry}
            material={materials.Concrete}
          />
        </group>
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424071"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424071'].geometry}
          material={materials.Stained_Glass}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          name="pro_1__-512_0_-512_to_516_255_424002"
          geometry={nodes['pro_1__-512_0_-512_to_516_255_424002'].geometry}
          material={materials.Diamond_Ore}
          position={[-0.0134, -0.1689, -0.1388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
      </group>
    </group>
  )
}

useGLTF.preload(FILE_URL)
