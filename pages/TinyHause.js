import TinyHouse from "../components/TinyHouse";
import introTiny from "../data/tiny.json"
import Head from 'next/head'
export default function Home() {
  const {mybigfamily} =introTiny
  const {amazingCountary} =introTiny
  const {feelGood} =introTiny
  const {freedom} =introTiny
  const {MyLittleFamily} =introTiny
  const {Spectecular} =introTiny
  return (
    <>
    <Head>
        <title>Contain Haus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TinyHouse data={mybigfamily}/>
      <TinyHouse data={amazingCountary}/>
      <TinyHouse data={feelGood}/>
      <TinyHouse data={freedom}/>
      <TinyHouse data={MyLittleFamily}/>
      <TinyHouse data={Spectecular}/>
    </>
  );
}
