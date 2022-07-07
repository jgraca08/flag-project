import React from "react";
import './Section.css';

const Section = (props) => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="card bg-dark text-white rounded-0">
        
              <img
                src="images/unmount.jpg"
                className="card-img"
                alt="..."
              ></img>
            
              <div className="card-img-overlay">
                <h4 className="card-title">Disassembly service</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
                <a href="#" className="btn btn-sm btn-danger rounded-0">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-dark text-white rounded-0">
              <img
                src="images/lateralturbo.jpg"
                className="card-img"
                alt="..."
              ></img>
              <div className="card-img-overlay">
                <h4 className="card-title">Turbo repair</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
                <a href="#" className="btn btn-sm btn-danger rounded-0">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
