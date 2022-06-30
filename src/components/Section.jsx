import React from "react";
import './Section.css';

const Section = (props) => {
  return (
    <>
      <div className="container mb-5">
        <div class="row">
          <div class="col-sm-6">
            <div class="card bg-dark text-white">
        
              <img
                src="images/unmount.jpg"
                class="card-img"
                alt="..."
              ></img>
            
              <div class="card-img-overlay">
                <h4 class="card-title">Disassembly service</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
                <a href="#" class="btn btn-sm btn-danger rounded-0">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card bg-dark text-white">
              <img
                src="images/lateralturbo.jpg"
                class="card-img"
                alt="..."
              ></img>
              <div class="card-img-overlay">
                <h4 class="card-title">Turbo repair</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
                <a href="#" class="btn btn-sm btn-danger rounded-0">
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
