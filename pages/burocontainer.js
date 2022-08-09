import React from "react";

// import ContainerInto from "../components/ContainerInto";

import introContainer from "../data/containerIntro.json";




import BuroContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";

import useOnScreen from "../utils/utils";
import dynamic from 'next/dynamic'
import ContainerDetail from "../components/ContainerDetail";
import buroData from "../data/ShopDeutsch.json";
const WhyWeComponent = dynamic(() => import("../components/WhyWeComponent"))
const ContainerColorSelector = dynamic(() => import("../components/ContainerColorSelector"))
const HomePageShop = dynamic(() => import("../components/HomePageShop"))
import Head from 'next/head'
import BuroContainerIntro from "../components/BuroContainerIntro";
const Burocontaıner = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const { buroconteiner } = introContainer;
  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  const burofilter = buroData.filter(
    (intro) =>
      intro.category === "burocontainer" || intro.category === "special"
  );



  return (
    <div>
        <Head>
        <title>Contain Haus | Bürocontainer Preise kaufen </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <ContainerInto data={buroconteiner}/> */}
      <BuroContainerIntro data={buroconteiner}></BuroContainerIntro>
      <ContainerDetail/>
    

   <div ref={child3Ref}>{child3RefValue ?
   <>  
     <HomePageShop data={burofilter}/>
    {/* <VideoCorausel /> */}
    <ContainerColorSelector
        data={BuroContarinerColorSelector}
      />
      <WhyWeComponent/>
      {/* <HaCusAndRefe/> */}
      <ContainerAnimation/>
   </> 
  :<div className="loading"></div> }</div> 

    
     
    </div>
  );
};

export default Burocontaıner;
