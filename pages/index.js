import React from "react";
// import ContainerInto from "../components/ContainerInto";
import buroHappyData from "../data/HaCusAndRefe.json";
import HaCusAndRefe from "../components/HaCusAndRefe";
import VideoCorausel from "../components/VideoCorausel";
import BurocontainerFlatpack from "../components/BurocontainerFlatpack"
import BuroContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";
import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";
import ContainerDetail from "../components/ContainerDetail";
import buroData from "../data/ShopDeutsch.json";
import BurocontainerText from "../components/BurocontainerText"
const WhyWeComponent = dynamic(() => import("../components/WhyWeComponent"));
const ContainerColorSelector = dynamic(() =>
  import("../components/ContainerColorSelector")
);
const HomePageShop = dynamic(() => import("../components/HomePageShop"));
import Head from "next/head";
import BuroContainerIntro from "../components/BuroContainerIntro";
import MenuContentData from  "../data/menu/menuContent.json"
import LoadingScreen from "../components/MenuComponents/LoadingScreen";


import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json";

export default function Home({img, svg}) {
  React.useEffect(() => {
    console.clear();
  }, []);
  const {burocontainerContent} = MenuContentData 
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const { specialeditatons } = introContainer;
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  console.log("first", isChild3Ref);
  const { buroconteiner } = introContainer;
  const { Flatpack } = introContainer;
  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  const burofilter = buroData.filter(
    (intro) =>
      intro.category === "burocontainer" || intro.category === "special"
  );
  const buroHappyDatafilter = buroHappyData.filter(
    (intro) => intro.category === "buroHappy"
  );
  return (
    <div>
      <Head>
        <title >Contain Haus | Bürocontainer Preise kaufen </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="bBMtH5kXrWTLjPfKza_SLNFavvMrG8U5c-xwvRFBRog" />
      </Head>

      {/* <ContainerInto data={buroconteiner}/> */}

      <BuroContainerIntro data={buroconteiner}></BuroContainerIntro>
      <BurocontainerFlatpack data={Flatpack}/>
      <ContainerDetail />

      <HomePageShop data={burofilter} />

      <ContainerColorSelector data={BuroContarinerColorSelector} />

      <WhyWeComponent />

      <HaCusAndRefe data={buroHappyDatafilter} />

      <VideoCorausel />

      <ContainerAnimation />
      <ContainerInto data={specialeditatons} />
      <BurocontainerText data={burocontainerContent} />
     
     
    </div>
  );
}
