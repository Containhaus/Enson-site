import React from "react";
import Link from "next/link";
import Head from "next/head";
const Überuns = () => {
  return (
   
      <>
      <Head>
        <title>Contain Haus | Über uns </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className="container agb-content">
          <div className="row mb-90 pb-30">
            <div className="col-lg-12 mt-5">
              <div className="caption ">
                <h2 className="words chars splitting text-dark d-flex justify-content-center fz-50">
                  <Link href="#" className="d-flex">
                  <h2>ÜBER UNS </h2>  
                  </Link>
                </h2>

                <p className="text-dark fz-20">
                  <span className="font-bold">
                    ContainHaus ist eine Marke der Sicherheit und Schnelligkeit
                    im Bereich Container und vorgefertigte Bautechnologien.
                  </span>
                  <br />
                  <br />
                  ContainHaus erwies sich als ein gut organisiertes Unternehmen,
                  das in der Lage ist, verschiedene Arten von Projekten in
                  verschiedenen Ländern zur gleichen Zeit durchzuführen.
                  <br />
                  <br />
                  <span className="font-bold">
                    ''Wir brechen die Standards''{" "}
                  </span>
                 In Zusammenarbeit mit unseren Ingenieuren, haben wir für
                  den Deutschen und Europäischen Markt die Standards gebrochen
                  und das Konzept mit erweiterbaren Container in Länge, breite
                  und Höhe auf den Markt gebracht. Durch die von unseren
                  Experten weiter entwickelte ''Nahtlose Gewinde Technik'' sind
                  wir flexibler und stabiler als alle unsere Mitbewerber. Wir
                  Produzieren Ihre Container und Stahlhäuser nach Ihren
                  gewünschten Massen und Bauen diese für Sie vor Ort auf. Durch
                  die ''Nahtlose Gewinde Technik'' sind unsere Container und
                  Stahlhäuser jederzeit erweiterbar, auch nach 5 Jahren Gebrauch
                  können wir Ihrem Wunsch entgegenkommen und Ihr Container oder
                  Stahlhaus in 1-2 Werktagen weitere Räume hinzufügen .
                  <br />
                  <br />
                  ContainHaus produziert seine Produkte in der Bundesrepublik
                  Deutschland - Hessen und betreibt verschiedene Bauprojekte wie
                  Baustellen, Notunterkünfte, Massenwohnungsprojekte,
                  Feriendörfer, Kindertageseinrichtungen und vieles mehr.
                  <br />
                  <br />
                  <span className="font-bold">Unsere Produkte:</span>
                 Modulbau (Baustellen, Büros, Schulen und medizinische
                  Einrichtungen, Militärlager) Wohncontainer
                  (Schnellbaucontainer, Sanitärcontainer, Baustellen- und
                  Bürocontainer) Modulare Kabinen Fertighäuser
                  <br />
                  <br />
                  <span className="font-bold">
                    Was machen wir anders:
                  </span>
                  <ol>
                    <li>
                      Wir Bauen unsere Container und Stahlhäuser vor Ort mit der
                      einzigartigen Technik der ''Nahtlosen Gewinde System''
                    </li>
                    <li>Container Herstellung in allen maßen</li>
                    <li> Moderne Container und Stahlhaus Bauten mit EnEV</li>
                    <li> Herstellung nach den Deutschen Normen</li>
                    <li>
                      {" "}
                      Projekte rechtzeitig liefern (schnelle Produktion und
                      schnelle Montage)
                    </li>
                    <li>
                      Stahlhäuser werden in 2 Wochen aufgebaut und
                      schlüsselfertig übergeben.
                    </li>
                    <li>Kundendienst, die Ihre bedürfnisse versteht</li>
                    <li>Hohe HSE-Maßstäbe</li>
                    <li>Mitarbeiterwertsatz</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
   
  );
};

export default Überuns;
