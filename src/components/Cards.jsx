import React from "react";
import './Cards.css';

const Cards = (props) => {
  return (
    <div className="container mt-4 mb-5">
      <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4">
        <button type="button" class="btn btn-outline-danger rounded-0">
          Original
        </button>
        <button type="button" class="btn btn-outline-danger rounded-0">
          Performance
        </button>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 shadow">
          <div className="inner">
            <img src="images/performance1.jpg" className="card-img-top" alt="turbocharger"></img>
            </div>
            <div className="card-body bg-light">
              <h5 className="card-title">Garrett GTB2265VK Hybrid Turbocharger BMW 530d 3.0D</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-sm btn-outline-danger rounded-0">
                More info
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
          <div className="inner">
            <img src="images/performance2.jpg" className="card-img-top" alt="turbocharger"></img>
            </div>
            <div className="card-body bg-light">
              <h5 className="card-title">Garrett GTB2365VK Hybrid Turbocharger BMW 330D E90 N57</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-sm btn-outline-danger rounded-0">
                More info
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
          <div className="inner">
            <img src="images/performance3.jpg" className="card-img-top " alt="..."></img>
            </div>
            <div className="card-body bg-light">
              <h5 className="card-title">Garrett GTB2365VK Hybrid Turbocharger Mercedes E350D</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-sm btn-outline-danger rounded-0">
                More info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
