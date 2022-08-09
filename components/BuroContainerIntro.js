import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
const BuroContainerIntro = ({data}) => {
    const [width] = windowSize();
  return (
    <>
    <div className="intro-img" style={{ backgroundImage: `url(${width>768 ?data.image1:data.mobileImage1})` }}>
     

      <div className="intro-content">
       <h1 className="fw-600">{data.title.second}</h1>

       <h5 className="text-danger fw-600">Direkt ab Werk</h5>
        <h5 className="fw-400">{data.content.first}</h5>
       <Link href={`${data.href}`}>
          <button className="intro-button ">JETZT ZUM SHOP</button>
        </Link>
      </div>
    </div>
 
 </>
  )
}

export default BuroContainerIntro