
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json"
import "swiper/css";
import "swiper/css/pagination";
import Head from 'next/head'
export default function Home() {
  const {buroconteiner} =introContainer
  const {wohncontainers} =introContainer
  const {sanitacontainers} =introContainer
  const {flatpackcontainers} =introContainer
  const {specialeditatons} =introContainer
  
  return (
    <>
    <Head>
        <title>Contain Haus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContainerInto data={buroconteiner}/>
      <ContainerInto data={wohncontainers}/>
      <ContainerInto data={sanitacontainers}/>
      <ContainerInto data={flatpackcontainers}/>
      <ContainerInto data={specialeditatons}/>
    </>
  );
}
