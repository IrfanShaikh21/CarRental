import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <center>
      <footer className="footer-container">
        <div className="col-md-5 offset-md-1 mb-3">
          <div className="navbar-logo">
            <p>Car-Rent</p>
          </div>
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{ backgroundColor: "#e74c3c", color: "#fff" }} 
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* <div className="row">
          <div className="container">
            <div className="ok">
              <h5>Section</h5>
              <ul className="nav section">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <center>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                </a>
              </li>
              {/* <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <img src={insta} alt="" />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <img src={whatsapp} alt="" />
                </a>
              </li> */}
            </ul>
          </div>
        </center>
      </footer>
    </center>
  );
}

export default Footer;
