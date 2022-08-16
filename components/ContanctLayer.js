import React from "react";
const ContanctLayer = () => {
  return (
    <div>
      <div>
        <ul className="stCoBtn footerdisDes">
          <li>
            <a href="tel:+4923028894880"
              
              className="floatPhoneDes sm-mb-20"
            >
             <img
              src="/assets/img/phone.svg"
              width={40}
              height={40}
            />
            </a>
          </li>
          <li>
            <a href="mailto:info@containhaus.de" className="floatEmaillDes  sm-mb-10">
            <img
              src="/assets/img/message.svg"
              width={30}
              height={30}
            />
            </a>
          </li>
          <li className="WhatsappAnimi">
            <a href="https://wa.me/491736221062" className="floatWhatsApplDes pulse  sm-mb-10">
            <img
              src="/assets/img/wp.svg"
              width={25}
              height={25}
            />
  
            </a>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default ContanctLayer;
