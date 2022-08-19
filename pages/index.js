import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json";
import Head from "next/head";
import Footer from "../components/Footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function Home() {
  const { buroconteiner } = introContainer;
  const { wohncontainers } = introContainer;
  const { sanitacontainers } = introContainer;
  const { specialeditatons } = introContainer;
  return (
    <>
      <Head>
        <title>Contain Haus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Splide
        options={{
          speed: 1000,
          waitForTransition: true,
          direction: "ttb",
          height: "100vh",
          wheel: true,
          pagination: false,
          arrows: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div>
            <ContainerInto data={buroconteiner} />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div>
            <ContainerInto data={wohncontainers} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <ContainerInto data={sanitacontainers} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <ContainerInto data={specialeditatons} />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div>
            <Footer />
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
}
