import React from "react";
const ContactLayerMobile = () => {
  return (
    <div>
      <div>
        <ul className="stCoBtnMo footerdisMo">
          <li>
            <a  href="tel:+4923028894880"   
              className="floatemailMobil  "
            >
              <img
              src="/assets/img/phone.svg"
              width={40}
              height={40}
            />
            </a>
          </li>
          <li>
            <a href="https://wa.me/491736221062" className="floaWhatsapplMobil  pulse ">
            <img
              src="/assets/img/wp.svg"
              width={37}
              height={37}
            />
  
            </a>
          </li>
          <li>
            <a  href="mailto:info@containhaus.de" className="floatingbuttonnnnMobil">
            <img
              src="/assets/img/message.svg"
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
export default ContactLayerMobile;
