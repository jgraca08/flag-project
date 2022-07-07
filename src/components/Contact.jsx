import React from "react";

const Contact = (props) => {
  return (
    <div className="container">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control rounded-0"
                    ></input>
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control rounded-0"
                    ></input>
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control rounded-0"
                    ></input>
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea rounded-0"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-md-left mt-3">
              <a
                className="btn rounded-0 btn-outline-danger"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
              <div className="card h-100 mb-2 mt-4" id="map-container-google-1"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513.2267173927346!2d-8.6128346417661!3d40.663977129409275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2398f7aaa45e17%3A0x1616d0dcb5e04097!2sTurbo%20Rebuild%20Center!5e0!3m2!1spt-PT!2spt!4v1657045945239!5m2!1spt-PT!2spt"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x text-danger"></i>
                <p>
                  Rua das Barrocas, Nº 566<br></br>
                  Aveiro
                </p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x text-danger"></i>
                <p>+351 911 665 558</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x text-danger"></i>
                <p>turbos@turbos.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
