import DisplayCube from "./DisplayCube";
import fetchAssets from "../../../../utils/fetchAssets";
import { useEffect } from "react";
import { useRealm } from "../../../../components/RealmState";
import {GroupProps} from "@react-three/fiber";

export default function DisplayCubes(props: { radius?: number } & GroupProps) {

  const { radius = -10 } = props;
  const { id, assets, setAssets, owner, setOwner, currentUser } = useRealm();
  useEffect(() => {
    fetchAssets(id).then((assets) => {
      if (setOwner) setOwner(assets.owner);
      if (setAssets) setAssets(assets.assets);
    })
  }, []);
  console.log(assets)

  const cubes = []
  if (assets) {
    for (let i=0; i<assets.length; i+=4) {
      // if (assets.length-i<4) {
      //   break;
      // }

      cubes.push(
        <group rotation-y={assets.length%4 === 0 ? 2*i*Math.PI/(assets.length) : 2*i*Math.PI/(assets.length-1)} key={i}>
          <group position-z={radius}>
            <DisplayCube assets={[assets[i], assets[i+1] || null, assets[i+2] || null, assets[i+3] || null]} position-y={1} />
          </group>
        </group>
      )
    }
  }
  return (
    <group name="displayCubes" {...props}>
      {cubes}
    </group>
  )
}
