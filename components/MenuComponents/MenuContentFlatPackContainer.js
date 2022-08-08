import React from "react";

const MenuContentFlatPackContainer = ({ data }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ColorSelectorDiv ">
              <div className="caption ml-0 mr-0 p-4 ColorSelectorDivCaption ">
                <h1 className="text-dark d-flex justify-content-center ">
                  {data.title.first}
                </h1>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image1}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify  text-dark">
                      {data.content.first}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.second}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.third}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-flex ">{data.title.second}</h2>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image2}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fifth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.seventh}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eidth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.ninth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.tenth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eleventh}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-block justify-content-center ">
                  {data.title.third}
                </h2>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image3}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.twelvth}
                    </p>
                    <p className="   fz-20 text-justify mb-10 fz-20 text-justify text-dark">
                      {data.content.thirteen}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forteen}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-flex">{data.title.forth}</h2>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image4}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fifteen}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-flex">{data.title.fifth}</h2>

                <ul className="mt-2 mb-2 fz-20 text-justify">
                  <li className="mt-2">
                    • Flatpack Container sind mit ihrem Preisvorteil
                    budgetfreundlich.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Vergleichen Sie unsere attraktive Angebote mit gebrauchten
                    Bürocontainern.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Holen Sie sich die besten Angebote zum Mietpreis für
                    Flatpack Container von Contain Haus.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Wenn Sie eine Flatpack -Mietoption wünschen, werfen Sie
                    einen Blick auf unsere Angebote, die wir Ihnen direkt ab
                    Werk anbieten!
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Unsere Kundenberater erwarten Sie für die am besten
                    geeignete Flatpack -Preisliste.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Wählen Sie Ihr Wunschmodell aus den Modellvarianten der
                    Büro- und Flatpack Container!
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Flatpack Container preise sind bei Contain Haus mit den
                    attraktivsten Optionen!
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Flatpack Absetzcontainer machen Spaß für alle, die Spaß an
                    Montage- und Reparaturarbeiten haben.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Dank Flatpack Container sind Sie mobil und unabhängig.
                    Wann immer Sie möchten, können Sie Ihren Container überall
                    hin mitnehmen, genau wie Ihren Rucksack, und die Freiheit
                    genießen.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Sie können den Flatpack nach Ihren Wünschen gestalten und
                    Tür, Fenster, WC, Badteile beliebig platzieren.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Einer der größten Vorteile bei Contain Haus Flatpack
                    Container ist die hohe Isolierung.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Contain Haus Flatpack Container sind erdbebensicher mit
                    einer Stärke von 9,00 ausgelegt.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Contain Haus Flatpack Container aus Edelstahl behalten
                    ihre Langlebigkeit über Jahrzehnte.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Die Böden mit Faserzementbasis sind ziemlich langlebig und
                    von Beton nicht zu unterscheiden.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Die untere und obere Fahrgestellbreite von Flatpack
                    Container beträgt 15 cm.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Flatpack Container sind hitzebeständig und wasserdicht.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Die Isolierung ist mit den 5 cm dicken Sandwichpaneelen,
                    die die Wände bilden, auf sehr hohem Niveau.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Flatpack Container haben eine gute Leistung in Bezug auf
                    Feuchtigkeits- und Schallschutz.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Wer einen Flatpack Container kauft, wird von den Flatpack
                    Containern aus eigener Produktion mit Langlebigkeit und
                    Preis begeistert sein.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Mit der Option Flatpack gebraucht kaufen können Sie
                    entweder gebrauchte Flatpack Container kaufen oder unsere
                    Flatpack Container aus Werksproduktion erwerben.
                  </li>
                </ul>

                <h2 className="text-dark d-flex">{data.title.sixth}</h2>

                <p className="   fz-20 text-justify text-dark">
                  {data.content.sixteen}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuContentFlatPackContainer;
