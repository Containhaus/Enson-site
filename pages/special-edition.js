import React from 'react'
import ContainerInto from '../components/ContainerInto'

import introContainer from "../data/containerIntro.json"
import WhyWeComponent from '../components/WhyWeComponent'

import ContainerAnimation from '../components/ContainerAnimation'

import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";
import ContainerDetail from '../components/ContainerDetail'
import intro2Data from "../data/ShopDeutsch.json"; 
import HomePageShop from '../components/HomePageShop'
import Head from 'next/head'
const VideoCorausel = dynamic(() => import("../components/VideoCorausel"));
const Burocontaıner = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const Specialfilter = intro2Data.filter(intro => intro.category === "special")
  
  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);

  const {specialeditatons} =introContainer
  return (
    <div>
         <Head>
        <title>Contain Haus | Special Edition Container </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <ContainerInto data={specialeditatons}></ContainerInto>
        <HomePageShop data={Specialfilter}></HomePageShop>
        <WhyWeComponent></WhyWeComponent>
        {/* <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div> */}
        {/* <ContainerColorSelector data={SpecialContainerColorSelector}></ContainerColorSelector> */}
       <ContainerAnimation></ContainerAnimation>
       <ContainerDetail></ContainerDetail>
    </div>
  )
}

export default Burocontaıner