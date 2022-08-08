import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProductList = ({ product }) => {
  return (
    <>
    <Link  href={`/container/${product.id}`}>
      <div className="col-md-6 col-12 col-lg-3 mb-4 mb-lg-0 gx-3 mt-2 cursor ">
        <div className="card text-black shadow-product">
          <Image
            width={306}
            height={229}
            src={product.image.ima1}
            className="card-img-top"
            priority
            alt="iPhone"
          />
          <div className="card-body card-info">
            <div className=" mt-1 ">
              <h4 className="card-title fw-600">{product.title}</h4>
              <h6 className="text-dark mb-1 pb-1  fz-10">{product.content.text1}</h6>
              <h5 className="text-dark mb-1 fw-600 pb-1 text-decoration-line-through">{product.content.cutprice}</h5>
              <h5 className="text-dark mb-1 fw-600 pb-1">{product.content.price}</h5>
              <h6 className="card-title mb-1 pb-1 fw-600">{product.content.text2}</h6>
              <h6 className="card-title mb-1 pb-1">{product.content.text3}</h6>
              <h6 className="card-title fz-15 display-1 mb-1 pb-1">{product.content.text6}</h6>
            </div>
            <div className="d-flex bottom-btn">
              <Link href="/kontakt">
                <button
                  type="button"
                  className="btn btn-md btn-warning rounded-pill flex-fill ps-4 pe-4 "
                  data-mdb-ripple-color="dark"
                >
                  Kontakt
                </button>
              </Link>
              <Link href={`/container/${product.id}`}>
                <button className="btn btn-md btn-secondary ps-4 pe-4 rounded-pill text-light detail-btn flex-fill ms-1">
                  Kaufen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default ProductList;