import React from 'react'
import ContainerInto from '../components/ContainerInto'

import introContainer from "../data/containerIntro.json"
import ContainerColorSelector from '../components/ContainerColorSelector'
import WhyWeComponent from '../components/WhyWeComponent'
import FlatPackContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json"
import ContainerAnimation from '../components/ContainerAnimation'
import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";
import ContainerDetail from '../components/ContainerDetail'
import intro2Data from "../data/ShopDeutsch.json"; 
import HomePageShop from '../components/HomePageShop'
const VideoCorausel = dynamic(() => import("../components/VideoCorausel"));

const Shop= () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);

  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  const {flatpackcontainers} =introContainer
  return (
    <div>
        <ContainerInto data={flatpackcontainers}></ContainerInto>

        <HomePageShop data={intro2Data}></HomePageShop>

        <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div>
        <ContainerColorSelector data={FlatPackContarinerColorSelector}></ContainerColorSelector>
        <WhyWeComponent></WhyWeComponent>
         <ContainerAnimation></ContainerAnimation>
         <ContainerDetail></ContainerDetail>
    </div>
  )
}

export default Shop