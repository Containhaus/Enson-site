import React, { useState } from "react";

import ReactPlayer from 'react-player'
import products from "../../data/ShopDeutsch.json";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import Head from 'next/head'
import VideoCorausel from "../../components/VideoCorausel";

const Product = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen1, setOpen1] = React.useState(false);
  function detailtextdiv() {
    const x = document.getElementById('textdiv');
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
  function Hidedetailtextdiv() {
    var x = document.getElementById("textdiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function Youtubevieodiv() {
    const x = document.getElementById('youtubevideoo');
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
  function HideYoutubevieodiv() {
    var x = document.getElementById("youtubevideoo");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  function showModal1() {
    setOpen1(true);
  }


  return (
    <div>
      <Head>
        <title>Contain Haus | {product?.title} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container-fluid  ProductPgBgColor p-0">

        <div className="container  p-0">
          <div className="row ">
            <div className="col-lg-7 col-md-12 col-12 mt-100">
              <div>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={800}
                      height={560}
                      quality={80}

                      src={product?.image?.Product1}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={800}
                      height={560}
                      quality={80}

                      src={product?.image?.Product2}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={800}
                      height={560}
                      quality={80}

                      src={product?.image?.Product3}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={800}
                      height={560}
                      quality={80}

                      src={product?.image?.Product4}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image

                      width={800}
                      height={560}
                      quality={80}

                      src={product?.image?.Product5}
                    />
                  </SwiperSlide>

                </Swiper>
                <Swiper
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                  onSwiper={setThumbsSwiper}
                >
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={147}
                      height={110}
                      quality={80}

                      src={product?.image?.Thumb1}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={147}
                      height={110}
                      quality={80}

                      src={product?.image?.Thumb2}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={147}
                      height={110}
                      quality={80}

                      src={product?.image?.Thumb3}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={147}
                      height={110}
                      quality={80}

                      src={product?.image?.Thumb4}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={147}
                      height={110}
                      quality={80}

                      src={product?.image?.Thumb5}
                    />
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 p-4 bg-white border mt-100 mobMt0">
              <div>
                <div >
                  <h4 className="fw-600 fz-30">{product?.title}</h4>
                  <h6 className="fw-600 fz-20 mt-2">Beschreibung</h6>
                  <p className="font-italic fz-18">{product?.content?.text6}</p>

                  <h6 className="mt-2 fz-20 fw-600">Maße</h6>
                  <p className="fz-18">{product?.content?.text3}</p>
                  <p className="fz-20 fw-600">Zustand</p>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <h4 className="fz-18 fw-600 ms-4 mb-3">{product?.content?.price}</h4>
                      <div className="martop">
                        <Link href="/kontakt">

                          <a className="">
                            <span className="ProductPageButton ">Jetzt Anfragen</span>
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                    {product?.content?.FlatpackPrice && (
                      <div className="col-6">
                        <p className="fz-18 fw-600 ms-4 mb-3">{product?.content?.FlatpackPrice}</p>
                        <Link href="/kontakt">
                          <a className="">
                            <span className="ProductPageButton ">Halb Demontiert</span>
                          </a>
                        </Link>{" "}
                      </div>
                    )}
                  </div>
                  <h6 className="fz-18 fw-600 mt-3">Kontakt</h6>
                  <div className="d-flex mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone-fill me-2 mt-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                    <p>
                      <a
                        href="tel:+4923028894880"
                        className="text-dark fz-18 fw-600"
                      >
                        + 49 2302 889 48 80
                      </a>
                    </p>
                  </div>

                  <div>
                    <Link href="/shop/alle">
                      <a className="mt-4 ">
                        <span className="ProductPageButton text-dark bg-warning">Weitere Produkte</span>
                      </a>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 ">
            <div className="row ProductDesJustify">
              <div className="text-center "
                key={product.id}
              >
                <a
                  className="btn btn-focus mx-1"
                  tabIndex="1"
                  onClick={() => {
                    detailtextdiv();
                    HideYoutubevieodiv();
                  }}
                >
                  Beschreibung
                </a>
                <a
                  className="btn btn-focus mx-1"
                  tabIndex="1"
                  onClick={() => {
                    Youtubevieodiv();
                    Hidedetailtextdiv();
                  }}
                >
                  Youtube Videos
                </a>

              </div>
              <div id="textdiv">
                <section >
                  <div >
                    <div className="row justify-content-center mt-5">
                      <div className="col-8">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td colSpan={1} className="fw-600 bg-dark text-light">
                                Maße
                              </td>
                            </tr>
                            <tr>
                              <td className="">Breite</td>
                              <td>{product?.description?.width}</td>
                            </tr>
                            <tr>
                              <td>Länge</td>
                              <td>{product?.description?.length}</td>
                            </tr>
                            <tr>
                              <td>Höhe</td>
                              <td>{product?.description?.height}</td>
                            </tr>
                            <tr>
                              <td>Quadratmeter</td>
                              <td>{product?.description?.Area}</td>
                            </tr>
                            <tr>
                              <td colSpan={1} className="fw-600 bg-dark text-light">
                                Beschreibung
                              </td>
                            </tr>
                            <tr>
                              <td>Besonderheiten</td>
                              <td>{product?.description?.Features}</td>
                            </tr>
                            <tr>
                              <td>Isolation</td>
                              <td>{product?.description?.Isolation}</td>
                            </tr>
                            {product?.description?.Elektronik && (
                              <tr>
                                <td>Elektronischen</td>
                                <td>{product?.description?.Elektronik}</td>
                              </tr>
                            )}
                            <tr>
                              <td>BodenStärke</td>
                              <td>{product?.description?.strength}</td>
                            </tr>
                            <tr>
                              <td>Kranösen</td>
                              <td>{product?.description?.CraneSlot}</td>
                            </tr>
                            
                            <tr>
                              <td>Raumausstattung</td>
                              <td>{product?.description?.customization}</td>
                            </tr>
                            <tr>
                              <td>Zusätzliches Zubehör</td>
                              <td>{product?.description?.ExtraAccesories}</td>
                            </tr>
                            <tr>
                              <td>Rollladen</td>
                              <td>{product?.description?.Shutar}</td>
                            </tr>
                            <tr>
                              <td>Warmwasser für Dusche</td>
                              <td>{product?.description?.heater}</td>
                            </tr>
                            <tr>
                              <td>Wasserboiler</td>
                              <td>{product?.description?.geaser}</td>
                            </tr>
                            <tr>
                              <td>Heizung</td>
                              <td>{product?.description?.cables}</td>
                            </tr>
                            <tr>
                              <td>Frostwächter</td>
                              <td>{product?.description?.fridge}</td>
                            </tr>
                            <tr>
                              <td>Urinal</td>
                              <td>{product?.description?.Urinate}</td>
                            </tr>
                            <tr>
                              <td>Farbauswahl-1</td>
                              <td>{product?.description?.ColorSelection}</td>
                            </tr>
                            <tr>
                              <td>Farbauswahl-2</td>
                              <td>Container Komplett Lackierung (inkl. Verarbeitung) 950 €</td>
                            </tr>
                            <tr>
                              <td>Preis Plus KDV</td>
                              <td>{product?.description?.PricePlusKDV}</td>
                            </tr>
                          </tbody>
                        </table>


                        {/* <div className="row">
                  <div className="col-lg-6 col-md-6 col-11">
                    <h3>
                      {product?.description?.Seller}
                    </h3>
                    <h4>
                      {product?.description?.deutsch}
                    </h4>
                    <h6 className="mb-4 fw-600">
                      {product?.description?.dimension}
                    </h6>
                    <p>
                      {product?.description?.width}
                    </p>
                    <p>
                      {product?.description?.length}
                    </p>
                    <p>
                      {product?.description?.height}
                    </p>
                    <p>
                      {product?.description?.Area}
                    </p>
                    <h6 className="mb-4 fw-600">
                      {product?.description?.Description}
                    </h6>
                    <p>
                      {product?.description?.Features}
                    </p>
                    <p>
                      {product?.description?.Isolation}
                    </p>
                    <p>
                      {product?.description?.strength}
                    </p>
                    <p>
                      {product?.description?.CraneSlot}
                    </p>
                    <p>
                      {product?.description?.TransportCost}
                    </p>

                    <p>
                      {product?.description?.customization}
                    </p>
                    <h6 className="mb-4 fw-600">{product?.description?.ExtraAccesories}</h6>
                    <p>
                    {product?.description?.ExtraAccesories1}
                    </p>
                    <p>
                      {product?.description?.Shutar}
                    </p>
                    <p>
                      {product?.description?.heater}
                    </p>
                    <p>
                      {product?.description?.geaser}
                    </p>
                    <p>
                      {product?.description?.cables}
                    </p>
                    <p>
                      {product?.description?.fridge}
                    </p>
                    <p>
                      {product?.description?.Urinate}
                    </p>
                    <p>
                      {product?.description?.ColorSelection}
                    </p>
                    <p>
                      {product?.description?.PricePlusKDV}
                    </p> */}

                        <p className="mt-5">
                          {product?.description?.ExtraText1}
                        </p>
                        <p>
                          {product?.description?.ExtraText2}
                        </p>

                        <p>
                          {product?.description?.ExtraText3}
                        </p>
                        <p>
                          {product?.description?.ExtraText4}
                        </p>
                        <p>
                          {product?.description?.ExtraText5}
                        </p>

                        <p>
                          {product?.description?.ExtraText6}
                        </p>
                        <p>
                          {product?.description?.ExtraText7}
                        </p>
                        <p>
                          {product?.description?.ExtraText8}
                        </p>
                        <p>
                          {product?.description?.ExtraText9}
                        </p>
                        <p>
                          {product?.description?.ExtraText10}
                        </p>
                        <p>
                          {product?.description?.ExtraText11}
                        </p>
                        <p>
                          {product?.description?.ExtraText12}
                        </p>
                        <p>
                          {product?.description?.ExtraText13}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>



              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-5" id="youtubevideoo" style={{ display: "none" }}>
              <VideoCorausel />
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Product;

//  export const getStaticPaths = async () => {
//    const paths = products.map((pro) => {
//     return {
//        params: { id: pro.id },
//      };
//    });
//    return {
//     paths,
//     fallback: true,
//    };
//  };
export const getServerSideProps = async (context) => {
  const product = products.find((pro) => pro.slug === context.params.slug);

  return {
    props: {
      product,
    },
  };
};
