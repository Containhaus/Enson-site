import React, { useState } from "react";
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
  return (
    <div>
        <Head>
      <title>Contain Haus | {product?.title} </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <div className="container-fluid ProductPgBgColor ">
        <div className="container p-5 mt-1">
          <div className="row ">
            <div className="col-lg-7 col-md-12 col-sm-12 mt-1">
              <div>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  navigation={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <Image
                      width={756}
                      height={534}
                      className="product-page-img"
                      src={product?.image?.ima1}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={756}
                      height={534}
                      className="product-page-img"
                      src={product?.image?.ima2}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={756}
                      height={534}
                      className="product-page-img"
                      src={product?.image?.ima3}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={756}
                      height={534}
                      className="product-page-img"
                      src={product?.image?.ima4}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={756}
                      height={534}
                      className="product-page-img"
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
                >
                  <SwiperSlide>
                    <Image
                      width={147}
                      height={110}
                      className="product-page-img"
                      src={product?.image?.ima1}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={147}
                      height={110}
                      className="product-page-img"
                      src={product?.image?.ima2}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={147}
                      height={110}
                      className="product-page-img"
                      src={product?.image?.ima3}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={147}
                      height={110}
                      className="product-page-img"
                      src={product?.image?.ima4}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={147}
                      height={110}
                      className="product-page-img"
                      src={product?.image?.ima5}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 p-5 bg-white border ">
              <div>
              
                  <div >
                    <h4 className="fw-600 fz-30">{product?.title}</h4>
                    <h6 className="fw-600 fz-20 mt-2">Beschreibung</h6>
                    <p className="font-italic fz-18">{product?.content?.text6}</p>
                  
                    <h6 className="mt-2 fz-20 fw-600">Mabe</h6>
                    <p className="fz-18">{product?.content?.text3}</p>
                
                    <p className="fz-20 fw-600">Zustand</p>
                    <hr />
                    <h4 className="fz-18 fw-600 mb-3">{product?.content?.price}</h4>
                    <Link href="/kontakt">
                      <a className="mt-4 ">
                        <span className="intro-button ">Jetzt Anfragen</span>
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
                  </div>
             
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3 pb-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const paths = products.map((pro) => {
    return {
      params: { id: pro.id },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const product = products.find((pro) => pro.id === context.params.id);

  return {
    props: {
      product,
    },
  };
};
