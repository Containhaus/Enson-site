import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import "../styles/style.css";
import "../styles/globals.css";
import TagManager from 'react-gtm-module'
// import "../styles/styleLight.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KXPX8H6' });
}, []);
  return (
    <>
    <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content=""
          />
          <meta
            name="description"
            content="Contain Haus ist eines der führenden Unternehmen der Containerbranche. Unser Unternehmen, das in Deutschland und der Türkei produziert, ist auch ein führendes F&E-Unternehmen, das fortschrittliche Technologien in seinem Bereich einsetzt. Das von ihm entwickelte Tiny House zielt darauf ab, das Leben einfacher und schöner zu machen, indem es autarke Häuser mit Modular Cube-Systemen entwirft."
          />
          <meta name="author" content="ContainHaus" />
          <link rel="shortcut icon" href="/assets/img/favicon.ico" />
        
        
        </Head>
      
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
        <Footer></Footer>
      </Layout>
    </>
  );
}
export default MyApp;
