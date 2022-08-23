import React from 'react'
import ContainerInto from '../components/ContainerInto'
import SanitaHappyData from "../data/HaCusAndRefe.json"
import introContainer from "../data/containerIntro.json"
import VideoCorausel from '../components/VideoCorausel'
import WhyWeComponent from '../components/WhyWeComponent'
import ContainerColorSelector from '../components/ContainerColorSelector'
import SanitarContarinerColorSelector from "../data/Color-Selector/SanitarContainerColor.json"
import ContainerAnimation from '../components/ContainerAnimation'
import useOnScreen from "../utils/utils";
import dynamic from 'next/dynamic'
import ContainerDetail from '../components/ContainerDetail'
import intro2Data from "../data/ShopDeutsch.json"; 
import HomePageShop from '../components/HomePageShop'
import Head from 'next/head'
import HaCusAndRefe from '../components/HaCusAndRefe'
import LoadingScreen from '../components/MenuComponents/LoadingScreen'



const SanitaContainer = ({sanitaColorData,sanitacontainers}) => {
  const [isChild3Ref, setIsChild3Ref] =  React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const Sanitarfilter = intro2Data.filter(intro => intro.category === "sanitarcontainer")
  const SanitaHappyDatafilter = SanitaHappyData.filter(
    (intro) =>
    intro.category === "SanitaHappy"
  );
  React.useEffect(() => {
    if (!isChild3Ref)
        setIsChild3Ref(child3RefValue);
 }, [child3RefValue])


  
  return (
    <div>
        <Head>
        <title>Contain Haus | Sanitärcontainer mit wc und Dushe Preise kaufen </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <ContainerInto data={sanitacontainers}></ContainerInto>
        <ContainerDetail></ContainerDetail>
       
           <HomePageShop data={Sanitarfilter}></HomePageShop>
       
        
       {/* <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div> */}
       <ContainerColorSelector data={sanitaColorData}></ContainerColorSelector>
       <WhyWeComponent></WhyWeComponent>
       
       <HaCusAndRefe data={SanitaHappyDatafilter}/>
       <VideoCorausel></VideoCorausel>
     <ContainerAnimation></ContainerAnimation>
          
     
  
  
    
  
    </div>
  )
}

export default SanitaContainer
export const getServerSideProps = async (context) => {
  const {sanitacontainers} =introContainer
  const sanitaColorData =  SanitarContarinerColorSelector
   return {
     props: {
      sanitaColorData,
      sanitacontainers
     },
   };
 };