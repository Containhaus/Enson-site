import React from "react";

const MenuContentBuroContainer = ({ data }) => {
  return (
    <>
      <div>
        <header>
          <div>
            <div className="container text-justify">
              <div className="row">
                <div className="col-lg-12  ">
                  <div className=" mt-200">
                    <h1 className=" text-dark d-flex  justify-content-center ">
                      {data.title.first}
                    </h1>

                    <h2 className=" text-dark mt-5 ">
                      {data.title.second}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img 
                          className="rounded content-image "
                          src={data.content.image1}
                        ></img>
                      </div> */}

                      <div className="col-12">
                        <p className="fz-20 text-justify text-dark ">
                          {data.content.first}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3 ">
                      {data.title.third}
                    </h2>

                    <div className="row justify-content-center">
                      {/*    
                      <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image2}
                        ></img>
                      </div> */}

                      <div className="col-lg-12 ">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.second}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.third}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.forth}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.fifth}
                    </h2>

                    <div className="row">
                      {/* <div className="col-10 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image3}></img>
                    </div> */}
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="fz-20 text-justify text-dark">
                          {data.content.sixth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.sixth}
                    </h2>

                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.seventh}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.eidth}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image4}></img>
                    </div> */}
                      <div className="col-lg-12">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.eidth}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.ninth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.ninth}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image5}></img>
                    </div> */}
                      <div className="col-lg-12">
                        <p className="fz-20 text-justify text-dark">
                          {data.content.tenth}
                        </p>
                        {" "}
                        <p className="fz-20 text-justify text-dark">
                          {data.content.eleventh}
                          &nbsp;
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.twelvth}
                        </p>
                        <p className="fz-20 text-justify text-dark">
                          {data.content.thirteen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.forteen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.fifteen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.sixteen}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.thenth}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image8}></img>
                    </div> */}
                      <div className="col-lg-12">
                        <p className="fz-20 text-justify text-dark">
                          {data.content.seventeen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.eighteen}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.eleven}
                    </h2>

                    <p className=" fz-20 text-justify text-dark">
                      {data.content.ninteen}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twenty}
                    </p>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.twelve}
                    </h2>

                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyOne}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyTwo}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyThree}
                    </p>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.thirteen}
                    </h2>

                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyFour}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyFive}
                    </p>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.forteen}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image6}></img>
                    </div> */}
                      <p className="fz-20 text-justify text-dark">
                        {data.content.twentySix}
                      </p>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.fifteen}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image7}></img>
                    </div> */}
                      <div className="col-12">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.twentySeven}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.twentyEight}
                        </p>
                        <p className="fz-20 text-justify text-dark">
                          {data.content.twentyNine}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.sixteen}
                    </h2>

                    <ul className="mt-2 mb-2 fz-20 text-justify">
                      <li className="mt-2">
                        • Bürocontainer sind mit ihrem Preisvorteil
                        budgetfreundlich. .
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Sehen Sie sich weitere attraktive Angebote mit
                        gebrauchten Bürocontainern an.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Holen Sie sich die besten Angebote zum Mietpreis für
                        Bürocontainer von Contain Haus.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Wenn Sie eine Bürocontainer-Mietoption wünschen,
                        werfen Sie einen Blick auf unsere Angebote, die wir
                        Ihnen direkt ab Werk anbieten!
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Unsere Kundenberater erwarten Sie für die am besten
                        geeignete Mietbürocontainer-Preisliste.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Wählen Sie Ihr Wunschmodell aus den Modellvarianten
                        der Toiletten- und Bürocontainer!
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Bürocontainerpreise sind bei Contain Haus mit den
                        attraktivsten Optionen!
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Flatpack Absetzcontainer Bürocontainer machen Spaß für
                        alle, die Spaß an Montage- und Reparaturarbeiten haben.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Dank Bürocontainern sind Sie mobil und unabhängig.
                        Wann immer Sie möchten, können Sie Ihren Container
                        nehmen und überall hin mitnehmen, genau wie Ihren
                        Rucksack, und die Freiheit genießen.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Kundenvertreter von Contain Haus geben Ihnen die
                        besten Preise für erschwingliche Bürocontainerpreise.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Sie können den Bürocontainer nach Ihren Wünschen
                        gestalten und Tür, Fenster, WC, Badteile beliebig
                        platzieren.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Einer der größten Vorteile von Contain Haus
                        Bürocontainern ist ihre hohe Isolierung.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Contain Haus Bürocontainer sind erdbebensicher mit
                        einer Stärke von 9,00 ausgelegt.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Contain Haus Bürocontainer aus Edelstahl behalten ihre
                        Langlebigkeit über Jahrzehnte.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Bürocontainerböden mit Faserzementbasis sind ziemlich
                        langlebig und von Beton nicht zu unterscheiden.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Die untere und obere Fahrgestellbreite von
                        Bürocontainern beträgt 15 cm.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Bürocontainer sind hitzebeständig und wasserdicht.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Die Isolierung ist mit den 5 cm dicken
                        Sandwichpaneelen, die die Wände bilden, auf sehr hohem
                        Niveau.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Bürocontainer haben eine gute Leistung in Bezug auf
                        Feuchtigkeits- und Schallschutz.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Wer einen Bürocontainer kauft, wird von den
                        Bürocontainern aus eigener Produktion mit Langlebigkeit
                        und Preis begeistert sein.
                      </li>
                      <li className="mt-2">
                        {" "}
                        • Mit der Option Bürocontainer gebraucht kaufen können
                        Sie entweder gebrauchte Bürocontainer kaufen oder unsere
                        Bürocontainer aus Werksproduktion erwerben.
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

export default MenuContentBuroContainer;
