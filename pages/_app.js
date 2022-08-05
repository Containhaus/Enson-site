import Head from "next/head";
import Cookies from "universal-cookie";
import Script from "next/script";
import Layout from "../components/Layout";
import "../styles/style.css";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect, useState } from "react";
// import "../styles/styleLight.css"
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const cook = new Cookies();
  const [session, setSession] = useState();
  useEffect(() =>{
    setSession(cook.get("key"));
    const TagManagerAgs ={
      gtmld: 'GTM-KXPX8H6'
    }
    TagManager.initialize(TagManagerAgs)
  },[])
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
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
      
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
