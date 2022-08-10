import React from "react";
import ContainerInto from "../components/ContainerInto";
import HaCusAndRefe from "../components/HaCusAndRefe";
import introContainer from "../data/containerIntro.json";
import WohnHappyData from "../data/HaCusAndRefe.json";
import WhyWeComponent from "../components/WhyWeComponent";
import ContainerColorSelector from "../components/ContainerColorSelector";
import WohnContainerColorSelector from "../data/Color-Selector/WohnContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";
import useOnScreen from "../utils/utils";

import ContainerDetail from "../components/ContainerDetail";
import HomePageShop from "../components/HomePageShop";
import intro2Data from "../data/ShopDeutsch.json"; 
import Head from 'next/head'
import VideoCorausel from "../components/VideoCorausel";
const WohnContainer = ({wohnColorData,wohncontainers}) => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const burofilter = intro2Data.filter(intro => intro.category === "burocontainer" || intro.category ===  "special" )  
  const WohnHappyDatafilter = WohnHappyData.filter(
    (intro) =>
    intro.category === "WohnHappy"  ||  intro.category === "buroHappy"
  );
  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  return (
    <div>
          <Head>
        <title>Contain Haus | Wohncontainer Preise kaufen </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContainerInto data={wohncontainers}></ContainerInto>
      <ContainerDetail></ContainerDetail>
      <HomePageShop data={burofilter}></HomePageShop>

      
      {/* <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div> */}
      <ContainerColorSelector
        data={wohnColorData}
      ></ContainerColorSelector>
      <WhyWeComponent></WhyWeComponent>
      <VideoCorausel></VideoCorausel>
      <HaCusAndRefe data={WohnHappyDatafilter}/>
      <ContainerAnimation></ContainerAnimation>
   
    </div>
  );
};

export default WohnContainer;
export const getServerSideProps = async (context) => {
  const { wohncontainers } = introContainer;
  const wohnColorData =  WohnContainerColorSelector
   return {
     props: {
      wohncontainers,
      wohnColorData,
     },
   };
 };