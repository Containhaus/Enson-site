import React from "react";
import Link from "next/link"

const ContainerModal = ({ data }) => {


  return (
    <>
      <div
        className="banner-img vh-100"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="banner-content col-lg-4 col-md-4    col-sm-6 col-12">
          <h5>{data.title.first}</h5>
          <h5>{data.title.second}</h5>
          <p>{data.content.first}</p>
          <p>{data.content.second}</p>
          <p>{data.content.third}</p>
          <Link href={`${data.href}`}>
          <button className="banner-button">JETZT ZUM SHOP</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContainerModal;
