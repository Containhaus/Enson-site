import React from "react";
// import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json";
import buroHappyData from "../data/HaCusAndRefe.json";
import HaCusAndRefe from "../components/HaCusAndRefe";
import BuroContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";
import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";
import ContainerDetail from "../components/ContainerDetail";
import buroData from "../data/ShopDeutsch.json";
const WhyWeComponent = dynamic(() => import("../components/WhyWeComponent"));
const ContainerColorSelector = dynamic(() =>
  import("../components/ContainerColorSelector")
);
const HomePageShop = dynamic(() => import("../components/HomePageShop"));
import Head from "next/head";
import BuroContainerIntro from "../components/BuroContainerIntro";
import VideoCorausel from "../components/VideoCorausel";
import LoadingScreen from "../components/MenuComponents/LoadingScreen";
const Burocontaıner = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);

  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  console.log("first", isChild3Ref);
  const { buroconteiner } = introContainer;
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
        <title>Contain Haus | Bürocontainer Preise kaufen </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <ContainerInto data={buroconteiner}/> */}
      <BuroContainerIntro data={buroconteiner}></BuroContainerIntro>
      <ContainerDetail />
      <div ref={child3Ref}>
        {child3RefValue ? (
          <>
            <HomePageShop data={burofilter} />
            <ContainerColorSelector data={BuroContarinerColorSelector} />
            <WhyWeComponent />
            <HaCusAndRefe data={buroHappyDatafilter} />
            <VideoCorausel></VideoCorausel>
            <ContainerAnimation />
          </>
        ) : (
          <div className="loading">
              <div className='container '>
            <LoadingScreen></LoadingScreen>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Burocontaıner;
