import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const Turbo = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [turbos, setTurbos] = useState([]);

  var { category, turbo } = useParams();

  useEffect(() => {
    fetch("https://62a0f7fb039c39cc8232a97d.mockapi.io/api/v1/categories/" + category + "/original/" + turbo)
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setTurbos([data]);
                console.log("um", data)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
},[]);

  if (error) {
    return (
      <tr>
        <td>Error: {error.message}</td>
      </tr>
    );
  } else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger mt-5 mb-5 " role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  } else {
    console.log("xpto", turbos)
    return (
      
      <>   
          {turbos.map((turbo) => {
            return (
                <div className="container mt-5 mb-5" key={turbo.id}>
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img
                    src={turbo.image}
                    id="main_product_image"
                    width="350"
                  ></img>
                </div>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{turbo.title}</h3>
                  <span className="heart">
                    <i className="bx bx-heart"></i>
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>
                    {turbo.longDescription}
                  </p>
                </div>              
                <div className="buttons d-flex flex-row mt-5 gap-3">
                <button className="btn btn-outline-danger rounded-0" type="submit"><i className="fa-solid fa-heart"></i></button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
            );
          })}
      </>
    );
  }
};

export default Turbo;




