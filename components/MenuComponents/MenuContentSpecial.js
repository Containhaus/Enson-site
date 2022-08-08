import React from 'react'

const MenuContentSpecial = ({data}) => {
  return (
    <div>
             <header>
      
          <div key={data.id}>
            <div className="container ">
              <div className="row">
                <div className="col-lg-12  ">
                  <div className=" ml-0 mr-0 p-4 ">
                    <h1
                      data-splitting
                      className=" text-dark  d-flex justify-content-center "
                    >
                      {data.title.first}
                    </h1>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.first}
                    </p>
                    <h2 data-splitting className=" text-dark mt-3 mb-3  ">
                      {data.title.second}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image1}
                        ></img>
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.second}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.third}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.forth}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <h2 data-splitting className=" text-dark mt-3 mb-3  ">
                      {data.title.third}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image2}
                        ></img>
                      </div> */}
                      <div className="col-12">
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
                      </div>
                    </div>
                    <h2 data-splitting className=" text-dark mt-3 mb-3 ">
                      {data.title.forth}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.tenth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eleventh}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.twelvth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.thirteen}
                    </p>

                    <h2 className=" text-dark mt-3 mb-3 d-flex">
                      {data.title.fifth}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forteen}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fivteen}
                    </p>
                  </div>
                  <h2 data-splitting className=" text-dark mt-3 mb-3 d-flex">
                    {data.title.sixth}
                    &nbsp; &nbsp; &nbsp;
                  </h2>
                  <ul className="mt-2 mb-2 d-block fz-20 text-justify">
                    <li className="mt-2">
                      ● Da Contain Haus seine Container im eigenen Werk
                      produziert, hat es einen Preisvorteil.
                    </li>
                    <li className="mt-2">
                      ● Die Ingenieure von Contain Haus geben ihr Bestes, um
                      Ihren Traumcontainer herzustellen.
                    </li>
                    <li className="mt-2">
                      ● Der Kauf eines Wohncontainerhauses ist jetzt ganz
                      einfach!
                    </li>
                    <li className="mt-2">
                      ● Den Kaufpreis des Wohncontainers und die Kosten des
                      Wohncontainers können Sie sofort bei unseren
                      Kundenberatern erfragen.
                    </li>
                    <li className="mt-2">
                      ● Spezielle Container für Start-up-Projekte haben einen
                      großen Vorteil bei der Gründung Ihres Traumunternehmens.
                    </li>
                    <li className="mt-2">
                      ● Wir bieten Ihnen die ideale Form von Küchen-, Bad- und
                      Wohncontainerprojekten.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
      </header>
    </div>
  )
}

export default MenuContentSpecial