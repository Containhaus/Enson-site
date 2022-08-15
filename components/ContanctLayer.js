import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
const ContanctLayer = () => {
  return (
    <div>
      <div>
        <ul className="stCoBtn footerdisDes">
          <li>
            <a href="tel:+4923028894880"
              
              className="floatPhoneDes sm-mb-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="text-light bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:info@containhaus.de" className="floatEmaillDes  sm-mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="text-white bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </a>
          </li>
          <li>
            <FloatingWhatsApp
              phoneNumber="+491736221062"
              accountName="ContainHaus"
              statusMessage="In kürze werden Sie kontaktiert."
              
              styles={{
                top: "18.5rem ",
                right: "0.2rem",
                width: "2.4rem",
                height: "2.4rem",
              }}
      
              notification
              notificationDelay={60000} // 1 minute
              avatar="/assets/img/RedBlack.webp"
              chatMessage="Hallo! Wie können wir Ihnen behilflich sein?"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContanctLayer;
