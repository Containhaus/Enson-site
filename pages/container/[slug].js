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

                      src={product?.image?.ima1}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={800}
                      height={560}

                      src={product?.image?.ima2}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={800}
                      height={560}

                      src={product?.image?.ima3}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={800}
                      height={560}

                      src={product?.image?.ima4}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
            
                      width={800}
                      height={560}

                      src={product?.image?.ima5}
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

                      src={product?.image?.ima1}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={147}
                      height={110}

                      src={product?.image?.ima2}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={147}
                      height={110}

                      src={product?.image?.ima3}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      objectFit="cover"
                      width={147}
                      height={110}

                      src={product?.image?.ima4}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={147}
                      height={110}

                      src={product?.image?.ima5}
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
                  <h4 className="fz-18 fw-600 mb-3">{product?.content?.price}</h4>
                  <Link href="/kontakt">
                    <a className="mt-4 ">
                      <span className="ProductPageButton ">Jetzt Anfragen</span>
                    </a>
                  </Link>{" "}
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
          <div className="mt-3 mb-3 pb-5 ">
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
                <div className="row">
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
                    </p>
                    <p>
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
                  <div className="col-lg-6 col-md-6 col-11 mt-5">
                    <ReactPlayer url='https://youtu.be/hJjpfnFyv74' />
                  </div>
                </div>
              </div>

              <div className="row">


                <div className="col-12 m-5" id="youtubevideoo" style={{ display: "none" }}>
                  <ReactPlayer url='https://youtu.be/hJjpfnFyv74' />
                </div>

              </div>




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
