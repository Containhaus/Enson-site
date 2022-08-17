import React from 'react'
import beforeAndAfterSlider from "../utils/utils";
import Footer from './Footer';
const BeforeAndAfterSlider = () => {
    React.useEffect(() => {
        beforeAndAfterSlider();
    });
    console.log('first', beforeAndAfterSlider)
  return (
    <div>
           <section className="after-before section-padding">
            <div
                className="background bg-img parallaxie"
                style={{ backgroundImage: "url(/assets/img/001.webp)" }}
                data-overlay-dark="7"
            ></div>
            <div className="container ontop">
                <div
                    className="section-head text-center wow fadeInUp"
                    data-wow-delay=".3s"
                >
                    <div className="row justify-content-center pt-80 md-pt0 ">
                        <div className="col-lg-12 col-md-10">
                            <h4 className="playfont">
                                Wischen Sie über das Sileder um den Innenbereich zu sehen.
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="dotsbg wow fadeInUp" data-wow-delay=".3s">
                            <div id="before-after-slider" className="wow imago">
                                <div className="overlay" />
                                <div
                                    className="twentytwenty-before-label"
                                    data-content=""
                                ></div>
                                <div
                                    className="twentytwenty-after-label"
                                    data-content=""
                                ></div>
                                <div id="before-image">
                                    <img src="/assets/img/BuroOnden.webp" alt="before" />
                                </div>
                                <div id="after-image">
                                    <img src="/assets/img/BruoUstten.webp" alt="After" />
                                </div>
                                <div id="resizer" className="twentytwenty-handle">
                                    <span className="twentytwenty-left-arrow"></span>
                                    <span className="twentytwenty-right-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default BeforeAndAfterSlider