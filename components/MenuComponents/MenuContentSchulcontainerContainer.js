import React from 'react'

const MenuContentSchulcontainerContainer = ({data}) => {
  return (
    <>
 <header>
     
          <div >
            <div className="container ">
              <div className="row ">
                <div className="col-lg-12  ">
                  <div className=" ml-0 mr-0 p-4  ">
                    <h1 className="mt-3 mb-3 text-dark d-flex justify-content-center ">
                      {data.title.first}
                    </h1>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image1} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.first}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.second}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.third}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-3 mb-3 text-dark ">
                      {data.title.second}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forth}
                    </p>

                    <h2 className="mt-3 mb-3 text-dark d-flex  ">
                      {data.title.third}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image2} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-3 mb-3 text-dark d-flex  ">
                      {data.title.forth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image3} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.sixth}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-3 mb-3 text-dark d-flex ">
                      {data.title.fifth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image4} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.seventh}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-3 mb-3 text-dark ">
                      {data.title.sixth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image5} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.eidth}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-3 mb-3 text-dark ">
                      {data.title.seventh}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.ninth}
                    </p>
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
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forteen}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </header>
    </>
  )
}

export default MenuContentSchulcontainerContainer