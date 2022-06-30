import React from "react";

const Footer = (props) => {
  return (
    <div class="bg-dark text-white">
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <div class="col-2">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
              <a href="#" class="text-white text-decoration-none">Home</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
              <a href="#" class="text-white text-decoration-none">Home</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
              <a href="#" class="text-white text-decoration-none">Home</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text-white text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control rounded-0"
                  placeholder="Email address"
                ></input>
                <button class="btn btn-primary bg-danger border-danger rounded-0" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <i class="fa-brands fa-twitter text-white"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <i class="fa-brands fa-instagram text-white"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <i class="fa-brands fa-facebook text-white"></i>
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
