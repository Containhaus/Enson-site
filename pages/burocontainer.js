import React from "react";
import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json";
import intro2Data from "../data/HaCusAndRefe.json";
import WhyWeComponent from "../components/WhyWeComponent";
import ContainerColorSelector from "../components/ContainerColorSelector";
import BuroContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";
import HomePageShop from "../components/HomePageShop";
import useOnScreen from "../utils/utils";
import HaCusAndRefe from "../components/HaCusAndRefe";
import ContainerDetail from "../components/ContainerDetail";
import buroData from "../data/ShopDeutsch.json";
import Head from 'next/head'
const Burocontaıner = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);

  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  const burofilter = buroData.filter(
    (intro) =>
      intro.category === "burocontainer" || intro.category === "special"
  );
  const { buroconteiner } = introContainer;
  return (
    <div>
        <Head>
        <title>Contain Haus | Bürocontainer Preise kaufen </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContainerInto data={buroconteiner}/>
      <ContainerDetail/>
    

   <div ref={child3Ref}>{child3RefValue ?
   <>  
     <HomePageShop data={burofilter}/>
    {/* <VideoCorausel /> */}
    <ContainerColorSelector
        data={BuroContarinerColorSelector}
      />
      <WhyWeComponent/>
      <HaCusAndRefe data={intro2Data}/>
      <ContainerAnimation/>
   </> 
  :<div className="loading"></div> }</div> 

    
     
    </div>
  );
};

export default Burocontaıner;
