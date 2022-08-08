import React from "react";

const MenuContentPfortnerContainer = ({data}) => {
  return (
    <>
      <header>
      
          <div>
            <div className="container ">
              <div className="row ">
                <div className="col-lg-12  ">
                  <div className="caption ml-0 mr-0 p-4  ">
                    <h1 className=" text-dark d-flex justify-content-center ">
                      {data.title.first}
                    </h1>
                    <p className=" mt-5  fz-20 text-justify text-dark">
                      {data.content.first}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.second}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.third}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forth}
                    </p>
                    <h2 className="text-dark mt-3 mb-3  ">
                      {data.title.second}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image1} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.third}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.seventh}
                    </p>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.forth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image2} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.eidth}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.ninth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  ">{data.title.fifth}</h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.tenth}
                    </p>

                    <h2 className=" text-dark ">{data.title.sixth}</h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image3} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.eleventh}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark ">{data.title.seventh}</h2>
                    <ul className="mt-2 mb-2 fz-20 text-justify">
                      <li className="mt-2">
                        ● Durch den Preisvorteil sind Pförtnercontainer
                        budgetfreundlich.
                      </li>
                      <li className="mt-2">
                        ● Es ist eine gute Unterhaltung für diejenigen, die
                        Freude an Montage- und Reparaturarbeiten haben.
                      </li>
                      <li className="mt-2">
                        ● Mit den Pförtnercontainern sind Sie mobil und
                        unabhängig. Wann immer Sie möchten, können Sie Ihren
                        Container nehmen und überall hin mitnehmen, genau wie
                        Ihren Rucksack, und die Freiheit genießen.
                      </li>
                      <li className="mt-2">
                        ● Den Pförtnercontainer können Sie beliebig gestalten
                        und Tür und Fenster beliebig platzieren.
                      </li>
                      <li className="mt-2">
                        ● Einer der größten Vorteile der Container von Contain
                        Haus Pförtnercontainer ist ihre hohe Isolierung.
                      </li>
                      <li className="mt-2">
                        ● Container Haus Pförtnercontainer sind so konstruiert,
                        dass sie Erdbeben der Stärke 9,00 standhalten.
                      </li>
                      <li className="mt-2">
                        ● Contain Haus Pförtnercontainer aus Edelstahl bleiben
                        über Jahrzehnte unversehrt.
                      </li>
                      <li className="mt-2">
                        ● Mit ihrer Faserzementbasis sind die Containerböden von
                        Pförtnercontainer sehr solide und von Beton nicht zu
                        unterscheiden.
                      </li>
                      <li className="mt-2">
                        ● Die untere und obere Fahrgestellbreite der
                        Pförtnercontainer beträgt 15 cm.
                      </li>
                      <li className="mt-2">
                        ● Pförtnercontainer sind hitzebeständig und wasserdicht.
                      </li>
                      <li className="mt-2">
                        ● Die Isolierung ist mit den 5 cm dicken
                        Sandwichpaneelen, die die Wände bilden, auf sehr hohem
                        Niveau.
                      </li>
                      <li className="mt-2">
                        ● Pförtnercontainer haben eine gute Leistung im
                        Feuchtigkeits- und Schallschutz.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      </header>
    </>
  );
};

export default MenuContentPfortnerContainer;
