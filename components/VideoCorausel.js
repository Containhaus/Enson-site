import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
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
  const [isOpen8, setOpen8] = React.useState(false);
  const [isOpen9, setOpen9] = React.useState(false);
  const [isOpen10, setOpen10] = React.useState(false);
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
  function showModal8() {
    setOpen8(true);
  }
  function showModal9() {
    setOpen9(true);
  }
  function showModal10() {
    setOpen10(true);
  }
  return (
    <>
      <div className="container">

        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen1}
            videoId="As8XIPb9-NA"
            onClose={() => setOpen1(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen2}
            videoId="3JSit_voEqc"
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
            videoId="xHqGD4TSAtM"

            onClose={() => setOpen4(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen5}
            videoId="a8FQaW9XVlU"
            onClose={() => setOpen5(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen6}
            videoId="jDHpSpilFuU"
            onClose={() => setOpen6(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen7}
            videoId="hJjpfnFyv74"
            onClose={() => setOpen7(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen8}
            videoId="YGVXtLyGD5Q"
            onClose={() => setOpen8(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen8}
            videoId="W_kfISQx0pM"
            onClose={() => setOpen8(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen9}
            videoId="YGVXtLyGD5Q"
            onClose={() => setOpen9(false)}
          />
        )}


        <div className="wrapper pt-30 text-center">
          <Splide
            classes={{
              pagination: 'splide__pagvideo',
            }}
            options={{
              type: 'loop',
              rewind: true,
              drag: 'free',
              focus: 'center',
              gap: "1rem",
              perPage: 1,
              arrows: false,
              padding: '20%',
              autoScroll: {
                speed: 2,
              },
            }}
            // extensions={{ AutoScroll }}
          >
            <SplideSlide >

              <div
                className="video-wrapper"

                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image
                    src="/assets/img/Youtubekapak2/7.webp"
                    width={888}
                    height={500}

                  />
                </div>
                <div className="VideoMob">

                  <Image
                    
                    src="/assets/img/Youtubekapak2/Mobil/7.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">

                  <a
                    className="vid"

                    onClick={(e) => {
                      showModal7
                      e.preventDefault();
                      setOpen7(true);
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


            </SplideSlide>
            <SplideSlide >
              <div className=" ">
                <div
                  className="video-wrapper "
                  data-overlay-dark="4"
                >

                  <div className="VideoDes">
                    <Image

                      src="/assets/img/Youtubekapak2/1.webp"
                      width={1600}
                      height={900}
                      quality={70}
                    />
                  </div>
                  <div className="VideoMob">

                    <Image

                      src="/assets/img/Youtubekapak2/Mobil/1.webp"
                      width={225}
                      height={400}
                      quality={70}
                    />
                  </div>
                  <div className="StopButt">
                    <a
                      className="vid"
                      onClick={(e) => {
                        showModal1
                        e.preventDefault();
                        setOpen1(true);
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


            <SplideSlide  >

              <div
                className="video-wrapper "

                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image

                    src="/assets/img/Youtubekapak2/2.webp"
                    width={1600}
                    height={900}
                    quality={70}
                  />
                </div>
                <div className="VideoMob">

                  <Image


                    src="/assets/img/Youtubekapak2/Mobil/2.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">
                  <a
                    className="vid"
                    onClick={(e) => {
                      showModal2
                      e.preventDefault();
                      setOpen2(true);
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


            </SplideSlide>
            <SplideSlide >

              <div
                className="video-wrapper "

                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image

                    src="/assets/img/Youtubekapak2/3.webp"
                    width={1600}
                    height={900}
                    quality={70}
                  />
                </div>
                <div className="VideoMob">

                  <Image

                    src="/assets/img/Youtubekapak2/Mobil/3.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">
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

            </SplideSlide>
            <SplideSlide >

              <div
                className="video-wrapper "
                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image

                    src="/assets/img/Youtubekapak2/4.webp"
                    width={1600}
                    height={900}
                    quality={70}
                  />
                </div>
                <div className="VideoMob">

                  <Image

                    src="/assets/img/Youtubekapak2/Mobil/4.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">
                  <a
                    className="vid"

                    onClick={(e) => {
                      showModal4
                      e.preventDefault();
                      setOpen4(true);
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

            </SplideSlide>
            <SplideSlide >

              <div
                className="video-wrapper "

                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image

                    src="/assets/img/Youtubekapak2/5.webp"
                    width={1600}
                    height={900}
                    quality={70}
                  />
                </div>
                <div className="VideoMob">

                  <Image

                    src="/assets/img/Youtubekapak2/Mobil/5.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">
                  <a
                    className="vid"

                    onClick={(e) => {
                      showModal5
                      e.preventDefault();
                      setOpen5(true);
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

            </SplideSlide>
            <SplideSlide >

              <div
                className="video-wrapper "

                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image

                    src="/assets/img/Youtubekapak2/6.webp"
                    width={1600}
                    height={900}
                    quality={70}
                  />
                </div>
                <div className="VideoMob">

                  <Image

                    src="/assets/img/Youtubekapak2/Mobil/6.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">

                  <a
                    className="vid"

                    onClick={(e) => {
                      showModal6
                      e.preventDefault();
                      setOpen6(true);
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



            </SplideSlide>

            <SplideSlide >

              <div
                className="video-wrapper "

                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image
                    src="/assets/img/Youtubekapak2/8.webp"
                    width={1600}
                    height={900}
                    quality={70}
                  />
                </div>
                <div className="VideoMob">

                  <Image

                    src="/assets/img/Youtubekapak2/Mobil/8.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">

                  <a
                    className="vid"

                    onClick={(e) => {
                      showModal8
                      e.preventDefault();
                      setOpen8(true);
                    }}
                    href="https://youtu.be/W_kfISQx0pM"
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


            </SplideSlide>
            <SplideSlide >

              <div
                className="video-wrapper "

                data-overlay-dark="4"
              >

                <div className="VideoDes">
                  <Image
                    src="/assets/img/Youtubekapak2/9.webp"
                    width={1600}
                    height={900}
                    quality={70}
                  />
                </div>
                <div className="VideoMob">

                  <Image

                    src="/assets/img/Youtubekapak2/9.webp"
                    width={225}
                    height={400}
                    quality={70}
                  />
                </div>
                <div className="StopButt">

                  <a
                    className="vid"

                    onClick={(e) => {
                      showModal9
                      e.preventDefault();
                      setOpen9(true);
                    }}
                    href="https://youtu.be/YGVXtLyGD5Q"
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


            </SplideSlide>




          </Splide>

        </div>
      </div>
    </>
  );
};
