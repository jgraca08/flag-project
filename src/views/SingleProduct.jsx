import React from "react";


const SingleProduct = (props) => {
  return (
    <React.Fragment>
      <div class="container mt-5 mb-5">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-6 border-end">
              <div class="d-flex flex-column justify-content-center">
                <div class="main_image">
                  <img
                    src="images/performance3.jpg"
                    id="main_product_image"
                    width="350"
                  ></img>
                </div>
                
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 right-side">
                <div class="d-flex justify-content-between align-items-center">
                  <h3>IIlana</h3>
                  <span class="heart">
                    <i class="bx bx-heart"></i>
                  </span>
                </div>
                <div class="mt-2 pr-3 content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>              
                <div class="buttons d-flex flex-row mt-5 gap-3">
                <button className="btn btn-outline-danger rounded-0" type="submit"><i className="fa-solid fa-heart"></i></button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
