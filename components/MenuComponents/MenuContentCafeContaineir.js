import React from "react";

const MenuContentCafeContaineir = ({ data }) => {
  return (
    <>
      <header>
        <div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-12  ">
                <div className=" ml-0 mr-0 p-4  ">
                  <h1 className=" text-dark d-flex justify-content-center ">
                    {data.title.first}
                  </h1>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.first}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.second}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.third}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.forth}
                  </p>
                  <h2 className=" text-dark ">{data.title.second}</h2>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.fifth}
                  </p>
                  <h2 className=" text-dark d-flex  ">{data.title.third}</h2>
                  <div className="row">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                      <img src={data.content.image1} />
                    </div> */}
                    <div className="col-12">
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.sixth}
                      </p>
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.seventh}
                      </p>
                    </div>
                  </div>

                  <h2 className=" text-dark d-flex  ">{data.title.forth}</h2>
                  <div className="row">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                      <img src={data.content.image2} />
                    </div> */}
                    <div className="col-12">
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.eidth}
                      </p>
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.ninth}
                      </p>
                    </div>
                  </div>
                  <h2 className=" text-dark ">{data.title.fifth}</h2>
                  <ul className="mt-2 mb-2 fz-20 text-justify">
                    <li className="mt-2">
                      ● Cafécontainer sind mit ihrem Preisvorteil absolut
                      budgetfreundlich. .
                    </li>
                    <li className="mt-2">
                      ● Dank Café-Containern sind Sie mobil und unabhängig. Mit
                      anderen Worten, Sie können Ihren Container überall hin
                      mitnehmen und die Freiheit genießen, als würden Sie Ihren
                      Rucksack mitnehmen, wann immer Sie wollen.
                    </li>
                    <li className="mt-2">
                      ● Sie können den Café-Container nach Ihren Wünschen
                      gestalten und Tür und Fenster beliebig platzieren.
                    </li>
                    <li className="mt-2">
                      ● Einer der größten Vorteile der Container von Contain
                      Haus ist ihre hohe Isolations- und Materialqualität.
                    </li>
                    <li className="mt-2">
                      ● Contain Haus Café-Container aus Edelstahl sind
                      jahrzehntelang haltbar.
                    </li>
                    <li className="mt-2">
                      ● Mit seiner Faserzementbasis sind Containerböden für
                      Cafés ziemlich langlebig und von Beton nicht zu
                      unterscheiden.
                    </li>
                    <li className="mt-2">
                      ● Café-Container sind hitzebeständig und wasserdicht.
                    </li>
                    <li className="mt-2">
                      ● Die Isolierung ist mit den 5 cm dicken Sandwichpaneelen,
                      die die Wände bilden, auf sehr hohem Niveau.
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

export default MenuContentCafeContaineir;
