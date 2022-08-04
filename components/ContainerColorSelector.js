import React, { useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
const ContainerColorSelector = ({ data }) => {
  const [colorText, setColorText] = useState(data[1].color)
  const [colorImgSrc, setColorImgSrc] = useState(data[1].image);
  const handleChangeColor = (src,name) => {
    setColorImgSrc(src);
    setColorText(name)
  };
  const router = useRouter()
  return (
    <>
      <div className="row color-select justify-content-center">
        <div className="col-lg-7 d-flex mt-5 paddingg">
          <img
            
            width={router.asPath==="/sanitar-container"?500: 750}
            height={router.asPath==="/sanitar-container"?530: 450}
            className=""
            src={colorImgSrc}
          />
        </div>

        <div className="col-lg-3  gx-5 ">
          <div className="text-start">
            <h1 className="mb-4 justify-content-center d-flex fw-600">Farbe</h1>
            <div className="paint-icons">
              {data.map((color) => (
                <div
                
                  className="container-style  mx-1  d-flex justify-content-center"
                  onMouseOver={() => handleChangeColor(color.image,color.color)}
                  key={color.id}
                >
                  <Image
                    className="img-fluid cursor"
                    width={180}
                    height={180}
                    src={color.class}
                    priority
                  />
                </div>
              ))}
            
            </div>
      
          </div>
          <div className="d-flex row mt-5 justtify-content-center">
              <h5 className="text-center fw-500">{colorText}</h5>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default ContainerColorSelector;
