import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from 'next/image';
const BuroContainerIntro = ({ data }) => {
  const [width] = windowSize();
  return (
    
      <div className="intro-img" >

        <Image
          width={1920}
          height={1080}
          quality={80}
          objectFit="cover"
          objectPosition=" center"
          src={width > 768 ? data.image1 : data.mobileImage1}
          
        />

   
          <div className='row MainPgContainer  p-5 '>
            <div className='col-lg-4 col-md-5 p-5 pt-0 disMoNone'>
              <div className='p-4 pb-2 MainPgText  text-center'>
                <h4 className=' text-light'>FlatPack</h4>
                <div className='text-start'>
                <p className='text-light ResFontSi'> Bürocontainer können Sie sowohl mieten als auch kaufen. Sie können schnell die Container einrichten, die Sie nach Ihren Wünschen gestalten können.</p>
                </div>
              </div>
              
              <hr className='lineMain' />
              
              <div className='p-4 pb-2 MainPgText text-light text-center'>
                <h4 className=' text-light'>Bürocontainer</h4>
                <div className='text-start'>
                <p className='text-light ResFontSi'>Bürocontainer können Sie sowohl mieten als auch kaufen. Es kann in den von Ihnen gewünschten Abmessungen hergestellt werden. Contain Haus, das führende Unternehmen auf dem Containermarkt, bietet Qualität zum günstigen Preis.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-7 p-5 pt-0  border-info border-3'>
              <h1 className="fw-600 text-light">{data.title.second}</h1>
              <h5 className=" fw-600 text-light mb-5 mbReMob">Direkt ab Werk</h5>
              <div className='MainPgTextRe p-4 d-inline-block'>
              <p className='text-light ResFontSi'><b>Contain Haus Container</b> werden mit besonderer Spitzentechnologie hergestellt und sind mit seiner statischen Berechnungen zur idealem und modernsten Container-Baukonstruktion auf dem europäischen Markt geworden.</p>
              
              <p className='text-light ResFontSi'>Bei der Herstellung von unseren Containern stehen Langlebigkeit,<b>Materialqualität und Ästhetik im Vordergrund.</b></p>
              
              <p className='text-light fw-700 ResFontSi '>Sie können sich jede Zeit auch an unsere Kundenberater wenden, um unsere Bürocontainer zu kaufen oder zu mieten.</p>
              </div>
              <div className='d-block mt-4 TextCenter'>
              <Link href={`${data.href}`}>
                <button className="btn btn-light  btnglow">JETZT ZUM SHOP</button>
              </Link>
              
              <Link href={`${data.href1}`}>
                <button className="btn ms-3 btn-light disMoNone">Kontakt</button>
              </Link>
              
              </div>
            </div>
          </div>

        </div>



      


    
  )
}
export default BuroContainerIntro