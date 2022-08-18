import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json"
import Head from 'next/head'
import Footer from "../components/Footer";

export default function Home() {
  const { buroconteiner } = introContainer
  const { wohncontainers } = introContainer
  const { sanitacontainers } = introContainer
  const { specialeditatons } = introContainer
  return (
    <>
      <Head>
        <title>Contain Haus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
        
        <ContainerInto data={buroconteiner} />
        
        
        <ContainerInto data={wohncontainers} />
        
        
        <ContainerInto data={sanitacontainers} />
        
        
        <ContainerInto data={specialeditatons} />
        
        
        <Footer/>
        
      
    </>
  );
}
