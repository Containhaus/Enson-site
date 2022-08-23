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

const Burocontaıner = ({specialeditatons}) => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  
  
  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);


  return (
    <div>
         <Head>
        <title>Contain Haus | Special Edition Container </title>
        <meta name="viewport " content="initial-scale=1.0, width=device-width" />
      </Head>
        <ContainerInto data={specialeditatons}></ContainerInto>
        <ContainerDetail></ContainerDetail>
        <HomePageShop data={intro2Data}></HomePageShop>
        <WhyWeComponent></WhyWeComponent>
       
       
       <ContainerAnimation></ContainerAnimation>
      
      
    </div>
  )
}

export default Burocontaıner
export const getServerSideProps = async (context) => {
  const {specialeditatons} =introContainer

   return {
     props: {
     
      specialeditatons
     },
   };
 };