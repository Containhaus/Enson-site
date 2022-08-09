import React from 'react'
import ContainerInto from '../components/ContainerInto'

import introContainer from "../data/containerIntro.json"


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
const VideoCorausel = dynamic(() => import('../components/VideoCorausel'))

const SanitaContainer = ({sanitaColorData}) => {
  const [isChild3Ref, setIsChild3Ref] =  React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const Sanitarfilter = intro2Data.filter(intro => intro.category === "sanitarcontainer")
  React.useEffect(() => {
    if (!isChild3Ref)
        setIsChild3Ref(child3RefValue);
 }, [child3RefValue])

  const {sanitacontainers} =introContainer
  
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
      <ContainerAnimation></ContainerAnimation>
  
    </div>
  )
}

export default SanitaContainer
export const getServerSideProps = async (context) => {
  
  const sanitaColorData =  SanitarContarinerColorSelector
   return {
     props: {
      sanitaColorData,
     },
   };
 };