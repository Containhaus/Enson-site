import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import Link from "next/link";
const HaCusAndRefe = ({ data }) => {
  return (
    <div className="container ">
        <div className="text-center ">
          <h5 className=" fw-400 pt-10 fz-30">Unsere Referenzen</h5>
        </div>
        <div className=" pe-5 ps-5">
          <Splide
            classes={{
              prev: 'splide__arrow--prev ArowPrevOut',
              next: 'splide__arrow--next ArowNextOut',
            }}
            options={{
              rewind: true,
              gap: "0.5rem",
              perPage: 4,
              pagination: false,

              breakpoints: {
                1200: {
                  perPage: 3,
                },
                994: {
                  perPage: 2,
                },
                769: {
                  perPage: 1,
                },
              },
              lazyLoad: 'nearby',
            }}
            aria-label="My Favorite Images"
          >
            {data.map((Val) => {
              return (
                <SplideSlide key={Val.id}>
                  
                    <div
                      className="card p-2  col-12 shadow-product"
                      key={Val.id}
                    >
                      <div className="card-img-top text-center ">
                        <Splide
                          options={{

                            

                            pagination: false,
                            arrows: false
                          }}
                          aria-label="My Favorite Images"
                        >
                          <SplideSlide>
                            <Image
                              className="d-block"
                              src={Val.image.ima1}
                              width={400}
                              height={300}
                              quality={50}
                              alt="First slide"
                            />
                          </SplideSlide>

                        </Splide>
                      </div>
                      <div>
                        <div className=" ">
                          <div className="text-center mt-2">
                            <h5>{Val.title}</h5>
                          </div>

                          <div className="d-flex mt-3">
                            <div className="d-flex mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                              </svg>
                              <p className="text-dark  mb-1 fw-600 pb-1">{Val.content.price}</p>
                            </div>
                            <div className="d-flex mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                              </svg>
                              <p className="card-title mb-1 pb-1 fw-600">{Val.content.text2}</p>
                            </div>
                          </div>

                        </div>
                        <div className="text-center bottom-btn-ref">
                          <Link href={Val.href.href1}>
                            <button
                              type="button "
                              className="btn btn-md btn-secondary rounded-pill flex-fill ps-4 pe-4 "
                              data-mdb-ripple-color="dark"
                            >
                              JETZT ZUM SHOP
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  
                </SplideSlide>
              );
            })}
          </Splide >
        </div>
        <div className="pt-5">
        <div className="bg-dark ">
          <Splide
            options={{
              rewind: true,
              gap: "0.5rem",
              perPage: 7,
              arrows: false,
              height: "100px",
              pagination: false,
              autoplay: true,
              breakpoints: {
                1400: {
                  perPage: 5,
                },
                994: {
                  perPage: 5,
                },
                769: {
                  perPage: 3,
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <Image
                layout="fill"
                quality={50}
                className="d-block   p-2"
                src="/assets/img/ReferansLogolar/1.png"
                alt="First slide"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                layout="fill"
                quality={50}
                className="d-block   p-2"
                src="/assets/img/ReferansLogolar/2.png"
                alt="First slide"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                layout="fill"
                quality={50}
                className="d-block   p-2"
                src="/assets/img/ReferansLogolar/3.png"
                alt="First slide"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                layout="fill"
                quality={50}
                className="d-block   p-2"
                src="/assets/img/ReferansLogolar/4.png"
                alt="First slide"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                layout="fill"
                quality={50}
                className="d-block   p-2"
                src="/assets/img/ReferansLogolar/5.png"
                alt="First slide"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                layout="fill"
                quality={50}
                className="d-block   p-2"
                src="/assets/img/ReferansLogolar/6.png"
                alt="First slide"
                
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                layout="fill"
                quality={50}
                className="d-block   p-2"
                src="/assets/img/ReferansLogolar/7.png"
                alt="First slide"
                
              />
            </SplideSlide>
          </Splide>
        </div>
        </div>
    </div >
  );
};
export default HaCusAndRefe;