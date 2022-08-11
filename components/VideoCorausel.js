import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
export default function VideoCorausel() {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen1, setOpen1] = React.useState(false);
  const [isOpen2, setOpen2] = React.useState(false);
  const [isOpen3, setOpen3] = React.useState(false);
  const [isOpen4, setOpen4] = React.useState(false);
  const [isOpen5, setOpen5] = React.useState(false);
  const [isOpen6, setOpen6] = React.useState(false);
  const [isOpen7, setOpen7] = React.useState(false);
  function showModal1() {
    setOpen1(true);
  }
  function showModal2() {
    setOpen2(true);
  }
  function showModal3() {
    setOpen3(true);
  }
  function showModal4() {
    setOpen4(true);
  }
  function showModal5() {
    setOpen5(true);
  }

  function showModal6() {
    setOpen6(true);
  }
  function showModal7() {
    setOpen7(true);
  }
  return (
    <>
      <div className="container mb-5 mt-30 ">
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen1}
            videoId="3JSit_voEqc"
            onClose={() => setOpen1(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen2}
            videoId="hJjpfnFyv74"
            onClose={() => setOpen2(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen3}
            videoId="xLZ0uFr7LKg"
            onClose={() => setOpen3(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo

            autoplay
            isOpen={isOpen4}
            videoId="As8XIPb9-NA"

            onClose={() => setOpen4(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo

            autoplay
            isOpen={isOpen5}
            videoId="xHqGD4TSAtM"
            onClose={() => setOpen5(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo

            autoplay
            isOpen={isOpen6}
            videoId="a8FQaW9XVlU"
            onClose={() => setOpen6(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo

            autoplay
            isOpen={isOpen7}
            videoId="jDHpSpilFuU"
            onClose={() => setOpen7(false)}
          />
        )}
        <div className="wrapper">
          <Splide
            classes={{
              pagination: 'splide__pagvideo',
              prev: 'ArowVideoPrev',
              next: 'ArowVideoNext',

            }}
            options={{
              focus: "center",
              rewind: true,
              loop: true,
              speed: 2000,
              gap: '1rem',
              arrows: false,
              perPage: 1,
              lazyLoad: 'nearby',
              height: '500px',
              padding: '20%',
              perMove: 1,
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
            }}
            aria-labelledby="autoplay-example-heading"
            hasTrack={true}
            aria-label="My Favorite Images"
          >
            
              <SplideSlide >

                <div className="container-fluid pl-0 pr-0">
                  <div
                    className="video-wrapper section-padding bg-img parallaxie valign"

                    data-overlay-dark="4"
                  >
                    <Image
                      className="VideoDes"
                      src="/assets/img/Youtubekapak2/1.jpg"
                      layout="fill"
                    />
                    <Image
                      className="VideoMob"
                      src="/assets/img/Youtubekapak2/Mobil/2.webp"
                      layout="fill"
                    />
                    <div className="full-width text-center">
                      <a
                        className="vid"
                        onClick={(e) => {
                          showModal1
                          e.preventDefault();
                          setOpen1(true);
                        }}
                        href="https://youtu.be/3JSit_voEqc"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              

              <SplideSlide  >
                <div className="container-fluid pl-0 pr-0">
                  <div
                    className="video-wrapper section-padding bg-img parallaxie valign"

                    data-overlay-dark="4"
                  >
                    <Image
                      className="VideoDes"
                      src="/assets/img/Youtubekapak2/2.jpg"
                      layout="fill"
                    />
                    <Image
                      className="VideoMob"
                      src="/assets/img/Youtubekapak2/Mobil/4.webp"
                      layout="fill"
                    />
                    <div className="full-width text-center">
                      <a
                        className="vid"
                        onClick={(e) => {
                          showModal2
                          e.preventDefault();
                          setOpen2(true);
                        }}
                        href="https://youtu.be/hJjpfnFyv74"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </SplideSlide>
              <SplideSlide >
                <div className="container-fluid pl-0 pr-0">
                  <div
                    className="video-wrapper section-padding bg-img parallaxie valign"

                    data-overlay-dark="4"
                  >
                    <Image
                      className="VideoDes"
                      src="/assets/img/Youtubekapak2/3.jpg"
                      layout="fill"
                    />
                    <Image
                      className="VideoMob"
                      src="/assets/img/Youtubekapak2/Mobil/3.webp"
                      layout="fill"
                    />
                    <div className="full-width text-center">
                      <a
                        className="vid"
                        onClick={(e) => {
                          showModal3
                          e.preventDefault();
                          setOpen3(true);
                        }}
                        href="https://youtu.be/xLZ0uFr7LKg"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide >
                <div className="container-fluid pl-0 pr-0">
                  <div
                    className="video-wrapper section-padding bg-img parallaxie valign"
                    data-overlay-dark="4"
                  >
                    <Image
                      className="VideoDes"
                      src="/assets/img/Youtubekapak2/4.jpg"
                      layout="fill"
                    />
                    <Image
                      className="VideoMob"
                      src="/assets/img/Youtubekapak2/Mobil/1.webp"
                      layout="fill"
                    />
                    <div className="full-width text-center">
                      <a
                        className="vid"

                        onClick={(e) => {
                          showModal4
                          e.preventDefault();
                          setOpen4(true);
                        }}
                        href="https://youtu.be/As8XIPb9-NA"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide >
                <div className="container-fluid pl-0 pr-0">
                  <div
                    className="video-wrapper section-padding bg-img parallaxie valign"

                    data-overlay-dark="4"
                  >
                    <Image
                      className="VideoDes"
                      src="/assets/img/Youtubekapak2/5.jpg"
                      layout="fill"
                    />
                    <Image
                      className="VideoMob"
                      src="/assets/img/Youtubekapak2/Mobil/5.webp"
                      layout="fill"
                    />
                    <div className="full-width text-center">
                      <a
                        className="vid"

                        onClick={(e) => {
                          showModal5
                          e.preventDefault();
                          setOpen5(true);
                        }}
                        href="https://youtu.be/xHqGD4TSAtM"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide >
                <div className="container-fluid pl-0 pr-0">
                  <div
                    className="video-wrapper section-padding bg-img parallaxie valign"

                    data-overlay-dark="4"
                  >
                    <Image
                      className="VideoDes"
                      src="/assets/img/Youtubekapak2/6.jpg"
                      layout="fill"
                    />
                    <Image
                      className="VideoMob"
                      src="/assets/img/Youtubekapak2/Mobil/2.webp"
                      layout="fill"
                    />
                    <div className="full-width text-center">

                      <a
                        className="vid"

                        onClick={(e) => {
                          showModal6
                          e.preventDefault();
                          setOpen6(true);
                        }}
                        href="https://youtu.be/a8FQaW9XVlU"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>


              </SplideSlide>
              <SplideSlide >
                <div className="container-fluid pl-0 pr-0">
                  <div
                    className="video-wrapper section-padding bg-img parallaxie valign"

                    data-overlay-dark="4"
                  >
                    <Image
                      src="/assets/img/Youtubekapak2/7.jpg"
                      layout="fill"
                    />
                    <Image
                      className="VideoMob"
                      src="/assets/img/Youtubekapak2/Mobil/6.webp"
                      layout="fill"
                    />
                    <div className="full-width text-center">

                      <a
                        className="vid"

                        onClick={(e) => {
                          showModal7
                          e.preventDefault();
                          setOpen7(true);
                        }}
                        href="https://youtu.be/jDHpSpilFuU"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </SplideSlide>
            
              
          </Splide>
          
        </div>
      </div>
    </>
  );
};
