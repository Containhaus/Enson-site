import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from 'next/image';
const BuroContainerIntro = ({data}) => {
    const [width] = windowSize();
  return (
    <>
    <div className="intro-img" >
    <Image
          layout="fill"
          objectFit="cover"
          objectPosition=" center"
          src={width>768 ?data.image1:data.mobileImage1}
          priority
        />
        
      <div className="intro-content">
       <h1 className="fw-600">{data.title.second}</h1>
       <h5 className=" fw-600">Direkt ab Werk</h5>
       <Link href={`${data.href}`}>
          <button className="intro-button ">JETZT ZUM SHOP</button>
        </Link>
      </div>
      <div className='intro-SEOText'>
        <ul>
          <li>Bürocontainer können Sie sowohl mieten als auch kaufen.</li>
          <li>Es kann in den von Ihnen gewünschten Abmessungen hergestellt werden.</li>
          <li>Contain Haus, das führende Unternehmen auf dem Containermarkt, <br/> bietet Qualität zum günstigen Preis.</li>
        </ul>
      </div>
    </div>
    
 </>
  )
}
export default BuroContainerIntro