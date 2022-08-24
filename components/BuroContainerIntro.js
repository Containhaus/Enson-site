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
    </div>
 </>
  )
}
export default BuroContainerIntro