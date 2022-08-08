import React from 'react'

const MenuSanitarContainer = ({data}) => {
  return (
    <>
 <header>
  
          <div >
            <div className="container ">
              <div className="row">
                <div className="col-lg-12  ">
                  <div className=" ml-0 mr-0 p-4  ">
                    <h1 className="text-dark mt-3 mb-3 d-flex  justify-content-center ">
                      {data.title.first}
                    </h1>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.first}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.second}
                    </p>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.twelvth}
                    </h2>
                    <ul className="mt-2 mb-2 fz-20 text-justify">
                      <li className="mt-2">
                        Auf Baustellen in der Bauindustrie,
                      </li>
                      <li className="mt-2">Konzertbereiche,</li>
                      <li className="mt-2">an der Küste,</li>
                      <li className="mt-2">im Poolbetrieb,</li>
                      <li className="mt-2">In Cafés und Restaurants,</li>
                      <li className="mt-2">in Lagern,</li>
                      <li className="mt-2">In fairen Gegenden</li>
                      <li className="mt-2">
                        WC Duschcontainer werden in Unternehmen eingesetzt.
                      </li>
                    </ul>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.third}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.third}
                    </p>
                    <h2 className="text-dark mt-3 mb-3  ">
                      {data.title.forth}
                    </h2>

                    <div className="row justify-content-center mt-3 mb-3">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12">
                        <img src={data.content.image1} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.forth}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-dark mt-3 mb-3 ">
                      {data.title.fifth}
                    </h2>
                    <div className="row justify-content-center mt-3 mb-3">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12">
                        <img src={data.content.image2} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-dark mt-3 mb-3 d-block justify-content-center">
                      {data.title.sixth}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>
                  </div>
                  <h2 className="text-dark mt-3 mb-3 ">{data.title.eidth}</h2>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.seventh}
                  </p>
                  <h2 className="text-dark mt-3 mb-3 ">{data.title.ninth}</h2>
                  <ul className="mt-2 mb-2">
                    <li className="mt-2">
                      ● Contain Haus WC-Duschcontainer können problemlos in
                      Sportanlagen, Parks, Gärten, Bauten, Messen,
                      Einkaufszentren, Tankstellen und vielen anderen Bereichen
                      eingesetzt werden, die Sie sich vorstellen können.
                    </li>
                    <li className="mt-2">
                      ● WC-Duschcontainer haben durch ihre Strapazierfähigkeit
                      eine lange Lebensdauer und eine Struktur, die mit den
                      verwendeten Materialien die Bildung von Bakterien im Sinne
                      der Gesundheit verhindert.
                    </li>
                    <li className="mt-2">● Der Geruch wird nicht entfernt.</li>
                    <li className="mt-2">
                      ● Contain Haus hat eine ergonomische Struktur für
                      WC-Dusch-Container, in Bezug auf Breite und Höhe, in einer
                      Größe, die leicht einer Person passt.
                    </li>
                    <li className="mt-2">
                      ● In unseren WC-Duschcontainern befinden sich
                      Lüftungsfenster, Waschbecken und Toilettenschüsseln.
                    </li>
                    <li className="mt-2">
                      ● Darüber hinaus ist das wichtigste Merkmal dieser
                      Container, dass sie transportabel und modular aufgebaut
                      sind.
                    </li>
                    <li className="mt-2">
                      ● Contain Haus kümmert sich um Ihren Komfort. Deshalb sind
                      die WC-Duschcontainer von Contain Haus mit dabei, wenn es
                      mal klemmt!
                    </li>
                  </ul>
                  <h2 className="text-dark mt-3 mb-3 ">{data.title.thenth}</h2>
                  <div className="row justify-content-center mt-3 mb-3">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12">
                      <img src={data.content.image3} />
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

                  <h2 className="text-dark mt-3 mb-3 ">{data.title.eleven}</h2>
                  <ul className="mt-2 mb-2">
                    <li className="mt-2">
                      ● WC-Dusch-Container können leicht von einem Ort zum
                      anderen bewegt werden. .
                    </li>
                    <li className="mt-2">
                      ● Es ist langlebig durch seine sehr solide
                      Materialqualität.
                    </li>
                    <li className="mt-2">
                      ● Bakterien können sich nicht vermehren.
                    </li>
                    <li className="mt-2">
                      ● Es hat eine ausreichende Breite und bietet eine
                      komfortable Nutzungsfläche.
                    </li>
                    <li className="mt-2">
                      ● Es gibt eine Eingangstür, Lüftungsfenster sowie Strom-
                      und Wasseranschluss.
                    </li>
                    <li className="mt-2">
                      ● Verschiedene Modelloptionen von Contain Haus
                      WC-Duschcontainern werden nach Kundenwunsch vorbereitet.
                    </li>
                    <li className="mt-2">
                      ● Contain Haus WC-Duschcontainer heben sich durch ihre
                      hohe Materialqualität und feine Verarbeitung von der
                      Konkurrenz ab.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
      </header>

    </>
  )
}

export default MenuSanitarContainer