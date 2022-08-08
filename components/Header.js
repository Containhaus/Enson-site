import React from "react";
import Link from "next/link";

const Header = () => {
  const first = React.useRef(null)
  const handleClick=()=>{
    setTimeout(() => {
      first.current.className ="navbar-collapse collapse"
    }, 200);
    
  }
 
  return (
    <>
      <header role="banner ">
        <div className="fixed-top">
          <div className="navbar-catalog ">
            <div className="navbar-info"> 
            <span className=" navbar-info-span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill me-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              
              <a href="tel:+4923028894880" className="">
                    +49 2302 889 4880
                  </a>
              
            </span>

            <span className=" navbar-info-span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              
              <a href="mailto:info@containhaus.de" className="contact-info">
                    info@containhaus.de
                  </a>
              
            </span>
    
            <span className="text-danger navbar-info-span">
              <Link href="https://www.containhaus.de/assets/img/KATALOG.pdf">
                KATALOG
              </Link>
            </span>
            </div>
          </div>
          <nav className="navbar navbar-expand-md navbar-light bg-light ">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand" >
                  <img
                    height={72}
                    width={120}
                    src="/assets/img/RedBlack.webp"
                    alt=""
                  />
                </a>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
              ref={first}
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto pl-lg-5 mx-2 pl-0 text-center">
                  <li className="nav-item">
                    <Link href="/burocontainer">
                      <a className="nav-link" aria-current="page" onClick={handleClick} >
                        Bürocontainer
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/wohncontainer">
                      <a className="nav-link" onClick={handleClick} >
                        XL Wohncontainer
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/sanitar-container">
                      <a className="nav-link" onClick={handleClick}>Sanitär Container</a>
                    </Link>
                  </li>
                
                  <li className="nav-item">
                    <Link href="/special-edition">
                      <a className="nav-link" onClick={handleClick}>Special Edition</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/shop/alle">
                      <a className="nav-link" onClick={handleClick}>Shop</a>
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto text-center">
                  <li className="nav-item cta-btn">
                    <a
                      className="nav-link"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      Menü
                    </a>
                  </li>
                  <li className="nav-item cta-btn">
                    <Link href="/kontakt">
                      <a onClick={handleClick} className="nav-link" href="">
                        Kontakt
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto pl-lg-5 pl-0 ">
            <li className="nav-item">
              <a
                href="/menu/burocontainer"
                className="nav-link"
                aria-current="page"
              >
                Bürocontainer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu/xlwohncontainer">
                XL Wohncontainer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu/wohncontainer">
                Wohncontainer
              </a>
            </li>
            <li className="nav-item">
              <a href="/menu/sanitarcontainer" className="nav-link">
                Sanitär Container
              </a>
            </li>
            <li className="nav-item">
              <a href="/menu/flat-pack" className="nav-link">
                Flat Pack
              </a>
            </li>
            <li className="nav-item">
              <a href="/menu/specialcontainer" className="nav-link">
                Special Edition
              </a>
            </li>
            <li className="nav-item">
              <a href="/menu/schulcontainer" className="nav-link">
                Schulcontainer
              </a>
            </li>
            <li className="nav-item">
              <a href="/menu/pfortnercontainer" className="nav-link">
                Pfortcontainer
              </a>
            </li>
            <li className="nav-item">
              <a href="/menu/cafe-container" className="nav-link">
                Cafe Container
              </a>
            </li>
            <li className="nav-item">
              <a href="/shop/alle" className="nav-link">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default Header;
