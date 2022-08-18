import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json"
import Head from 'next/head'
import Footer from "../components/Footer";
import { Splide, SplideSlide } from '@splidejs/react-splide';
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
      <Splide

        options={{
          speed: 2000,
          waitForTransition: true,
          direction: 'ttb',
          height: '100vh',
          wheel: true,
          pagination:false,
          arrows:true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
        <ContainerInto data={buroconteiner} />
        </SplideSlide>
        <SplideSlide>
        <ContainerInto data={wohncontainers} />
        </SplideSlide>
        <SplideSlide>
        <ContainerInto data={sanitacontainers} />
        </SplideSlide>
        <SplideSlide>
        <ContainerInto data={specialeditatons} />
        </SplideSlide>
        <SplideSlide>
        <Footer/>
        </SplideSlide>
      </Splide>
    </>
  );
}
