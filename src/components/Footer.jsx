import React from "react";

const Footer = (props) => {
  return (
    <div className="bg-dark text-white">
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
              <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
              <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
              <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-white text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Email address"
                ></input>
                <button className="btn btn-primary bg-danger border-danger rounded-0" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-facebook text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Footer;
