import React from "react";
import Link from "next/link";
import Image from "next/image";
const ContainerAnimation = () => {
  return (
    <>
      <div>
        <div className="container mt-4  border-bottom">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 item position-relative ">
              <div className="d-flex pb-4 justify-content-center position-relative">
                <div className="p-0 m-0 hoverItemmm">
                  <Image
                    src="/assets/img/Animation/Container.webp"
                    width={450}
                    height={200}
                    quality={5}
                    alt="Card image cap"
                    
                  />
                </div>
                <Image
                  src="/assets/img/Animation/DotBase.webp"
                 layout="fill"
                 quality={5}
                  className=" bottom1"
                  alt=""
                />
              </div>
              <h5>PUNKTFUNDAMENT</h5>
              <p>
                Der Punktfundament ist das beliebteste Fundamentart für
                Container. Der Punktfundament wird unterhalb der Stützen
                angeordnet. Für die genauen Maße, fordern Sie bitte einen
                Fundamentplan von unserem Service Team
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 item position-relative ">
              <div className="d-flex pb-4 justify-content-center position-relative">
                <div className="p-0 m-0 hoverItemmm">
                  <Image
                    src="/assets/img/Animation/Container.webp"
                    width={450}
                    height={200}
                    quality={5}
                    alt="Card image cap"
                    
                  />
                </div>
                <Image
                  src="/assets/img/Animation/beton-zemin.webp"
                  layout="fill"
                  quality={5}
                  className=" bottom1"
                  alt=""
                />
              </div>
              <h5>STREIFENFUNDAMENT</h5>
              <p>
                Streifenfundamente sind sehr beliebt und verbreitet. Sie
                übernehmen die Lasten der auf ihnen errichteten, tragenden
                Wände, während nichttragende Innenwände in der Regel direkt auf
                der Bodenplatte errichtet werden.{" "}
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 item position-relative ">
              <div className="d-flex pb-4 justify-content-center position-relative">
                <div className="p-0 m-0 hoverItemmm">
                  <Image
                    src="/assets/img/Animation/Container.webp"
                    width={450}
                    height={200}
                    quality={5}
                    alt="Card image cap"
                    
                  />
                </div>
                <Image
                  src="/assets/img/Animation/2.webp"
                  layout="fill"
                  quality={5}
                  className=" bottom1"
                  alt=""
                />
              </div>
              <h5>PLATTENFUNDAMENTE</h5>
              <p>
                Plattenfundamente oder Sohlplatten werden eingesetzt, wenn
                Einzel- oder Streifenfundamente wegen hoher Baulasten nicht
                wirtschaftlich sind. Für die genauen Maße, fordern Sie bitte
                einen Fundamentplan von unserem Service Team{" "}
              </p>
            </div>
            <div className="col-12 text-center mb-3 mt-4">
              <Link href="/shop/burocontainer">
                <span className="animation-button">Jetzt zum Shop</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerAnimation;
