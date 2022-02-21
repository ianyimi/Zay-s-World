import { StandardEnvironment } from "spacesvr";
import Gate from "./models/Gate";
// import Flashlight from "./components/Flashlight";
import { Debug } from "@react-three/cannon";
import { Box, Stars, Text } from "@react-three/drei";
import Water from "ideas/Water";
import Portal from "./Portal";
import MagicMirror from "ideas/MagicMirror";
import { Ramen, Soda, Farm, Heli } from './models/Models';
import BrandLogo from "./components/BrandLogo";

const FONT = "https://d1p3v0j4bqcb21.cloudfront.net/fonts/Etherrealms.otf";

export default function Home() {
  return (
    <StandardEnvironment
      dev={process.env.NODE_ENV === "development"}
      canvasProps={{ camera: { far: 1000 } }}
      playerProps={{ pos: [-20, 1, 0], rot: -Math.PI/2, speed: 10, controls: { disableGyro: true } }}
      physicsProps={{ defaultContactMaterial: { friction: 0.01 } }}
      // disableGround
    >
      <Debug scale={1} color="red">
        <Stars />
        <Gate scale={3} position-y={6} />
        {/*<Box args={[1, 1, 1]} />*/}
        <ambientLight intensity={1} />
        <Water color="0x001e0f" position-y={-5} />
        {/*<Text*/}
        {/*  position={[-3, 4, 0]}*/}
        {/*  rotation-y={-Math.PI/2}*/}
        {/*  color="white"*/}
        {/*  outlineColor="brown"*/}
        {/*  outlineWidth={0.1}*/}
        {/*  fontSize={3}*/}
        {/*  font={FONT}*/}
        {/*  letterSpacing={0.1}*/}
        {/*>*/}
        {/*  EtherRealms*/}
        {/*</Text>*/}
        <BrandLogo position={[-30, 3, -30]}/>
        {/*<Portal />*/}
        {/* @ts-ignore */}
        <MagicMirror position={[0, 0, 0]} args={[10, 10]} rotation-y={-Math.PI/2}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={1} />
          <pointLight position={[20, 30, 10]} />
          <pointLight position={[-10, -10, -10]} color="blue" />
          <group rotation-y={-Math.PI/2}>
            <Farm />
            <Heli />
          </group>
        </MagicMirror>
        {/*<ambientLight intensity={0.1} />*/}
        {/*<Flashlight />*/}
      </Debug>
    </StandardEnvironment>
  );
}
