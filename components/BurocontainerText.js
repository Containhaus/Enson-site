import React from "react";

const BurocontainerText = ({ data }) => {
  const [show, setShow] = React.useState(false);
  const { text } = data;
  return (
    <>
      <div>
        <header>
          <div>
            <div className="container text-justify">
              <div className="row">
                <div className="col-lg-12  ">
                  <div className=" mt-50">
                    <a
                      className="border d-block ps-3 mt-3 mb-3"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      <h2 className=" text-dark fz-20 mt-3 mb-3 ">
                        + {data.title.third}
                      </h2>
                    </a>
                    <div
                      className="row justify-content-center collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div className="col-lg-12 ">
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.third}
                        </p>
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.forth}
                        </p>
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <a
                      className="border d-block ps-3 mt-3 "
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                    >
                      <h2 className=" text-dark fz-20 mt-3 mb-3">
                        + {data.title.fifth}
                      </h2>
                    </a>

                    <div
                      className="row collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="fz-16 text-justify text-dark">
                          {data.content.sixth}
                        </p>
                      </div>
                    </div>

                    <div className="row justify-content-center"></div>
                    <a
                      className="border d-block ps-3 mt-3 mb-3"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample3"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample3"
                    >
                      <h2 className=" text-dark fz-20 mt-3 mb-3">
                        + {data.title.ninth}
                      </h2>
                    </a>

                    <div
                      className="row collapse multi-collapse"
                      id="multiCollapseExample3"
                    >
                      <div className="col-lg-12">
                        <p className="fz-15 text-justify text-dark">
                          {data.content.tenth}
                        </p>{" "}
                        <p className="fz-15 text-justify text-dark">
                          {data.content.eleventh}
                          &nbsp;
                        </p>
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.twelvth}
                        </p>
                        <p className="fz-15 text-justify text-dark">
                          {data.content.thirteen}
                        </p>
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.forteen}
                        </p>
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.fifteen}
                        </p>
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.sixteen}
                        </p>
                      </div>
                    </div>
                    <a
                      className="border d-block ps-3 mt-3 mb-3"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample4"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample4"
                    >
                      <h2 className=" text-dark fz-20 mt-3 mb-3">
                        + {data.title.thenth}
                      </h2>
                    </a>

                    <div
                      className="row collapse multi-collapse"
                      id="multiCollapseExample4"
                    >
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image8}></img>
                    </div> */}
                      <div className="col-lg-12">
                        <p className="fz-15 text-justify text-dark">
                          {data.content.seventeen}
                        </p>
                        <p className=" fz-15 text-justify text-dark">
                          {data.content.eighteen}
                        </p>
                      </div>
                    </div>
                    <a
                      className="border d-block ps-3 mt-3 mb-3"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample5"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample5"
                    >
                      <h2 className=" text-dark fz-20 mt-3 mb-3">
                        + {data.title.eleven}
                      </h2>
                    </a>

                    <div
                      className="row collapse multi-collapse"
                      id="multiCollapseExample5"
                    >
                      <p className=" fz-15 text-justify text-dark">
                        {data.content.ninteen}
                      </p>
                      <p className=" fz-15 text-justify text-dark">
                        {data.content.twenty}
                      </p>
                    </div>

                    <a
                      className="border d-block ps-3 mt-3 mb-3"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample6"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample6"
                    >
                      <h2 className=" text-dark fz-20 mt-3 mb-3">
                        + {data.title.twelve}
                      </h2>
                    </a>

                    <div
                      className="row collapse multi-collapse"
                      id="multiCollapseExample6"
                    >
                      <p className=" fz-15 text-justify text-dark">
                        {data.content.twentyOne}
                      </p>
                      <p className=" fz-15 text-justify text-dark">
                        {data.content.twentyTwo}
                      </p>
                      <p className=" fz-15 text-justify text-dark">
                        {data.content.twentyThree}
                      </p>
                    </div>

                    <a
                      className="border d-block mt-3 mb-3 ps-3"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample7"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample7"
                    >
                      <h2 className=" text-dark fz-20 mt-3 mb-3">
                        + {data.title.sixteen}
                      </h2>
                    </a>

                    <ul
                      className="mt-2 mb-2 fz-20 text-justify collapse multi-collapse"
                      id="multiCollapseExample7"
                    >
                      <li className="mt-2 fz-15">
                        ??? B??rocontainer sind mit ihrem Preisvorteil
                        budgetfreundlich. .
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Sehen Sie sich weitere attraktive Angebote mit
                        gebrauchten B??rocontainern an.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Holen Sie sich die besten Angebote zum Mietpreis f??r
                        B??rocontainer von Contain Haus.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Wenn Sie eine B??rocontainer-Mietoption w??nschen,
                        werfen Sie einen Blick auf unsere Angebote, die wir
                        Ihnen direkt ab Werk anbieten!
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Unsere Kundenberater erwarten Sie f??r die am besten
                        geeignete Mietb??rocontainer-Preisliste.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? W??hlen Sie Ihr Wunschmodell aus den Modellvarianten
                        der Toiletten- und B??rocontainer!
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? B??rocontainerpreise sind bei Contain Haus mit den
                        attraktivsten Optionen!
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Flatpack Absetzcontainer B??rocontainer machen Spa?? f??r
                        alle, die Spa?? an Montage- und Reparaturarbeiten haben.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Dank B??rocontainern sind Sie mobil und unabh??ngig.
                        Wann immer Sie m??chten, k??nnen Sie Ihren Container
                        nehmen und ??berall hin mitnehmen, genau wie Ihren
                        Rucksack, und die Freiheit genie??en.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Kundenvertreter von Contain Haus geben Ihnen die
                        besten Preise f??r erschwingliche B??rocontainerpreise.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Sie k??nnen den B??rocontainer nach Ihren W??nschen
                        gestalten und T??r, Fenster, WC, Badteile beliebig
                        platzieren.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Einer der gr????ten Vorteile von Contain Haus
                        B??rocontainern ist ihre hohe Isolierung.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Contain Haus B??rocontainer sind erdbebensicher mit
                        einer St??rke von 9,00 ausgelegt.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Contain Haus B??rocontainer aus Edelstahl behalten ihre
                        Langlebigkeit ??ber Jahrzehnte.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? B??rocontainerb??den mit Faserzementbasis sind ziemlich
                        langlebig und von Beton nicht zu unterscheiden.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Die untere und obere Fahrgestellbreite von
                        B??rocontainern betr??gt 15 cm.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? B??rocontainer sind hitzebest??ndig und wasserdicht.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Die Isolierung ist mit den 5 cm dicken
                        Sandwichpaneelen, die die W??nde bilden, auf sehr hohem
                        Niveau.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? B??rocontainer haben eine gute Leistung in Bezug auf
                        Feuchtigkeits- und Schallschutz.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Wer einen B??rocontainer kauft, wird von den
                        B??rocontainern aus eigener Produktion mit Langlebigkeit
                        und Preis begeistert sein.
                      </li>
                      <li className="mt-2 fz-15">
                        {" "}
                        ??? Mit der Option B??rocontainer gebraucht kaufen k??nnen
                        Sie entweder gebrauchte B??rocontainer kaufen oder unsere
                        B??rocontainer aus Werksproduktion erwerben.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default BurocontainerText;
