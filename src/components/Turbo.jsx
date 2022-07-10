import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Turbo = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [turbos, setTurbos] = useState([]);

  var { category, turbo } = useParams();

  useEffect(() => {
    fetch(
      "https://62a0f7fb039c39cc8232a97d.mockapi.io/api/v1/categories/" +
        category +
        "/original/" +
        turbo
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setTurbos([data]);
          console.log("um", data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

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
    console.log("xpto", turbos);
    return (
      <>
        <div className="container mt-4 mb-4">
          <div className="row">
            {turbos.map((turbo) => {
              return (
                <div class="row gx-4 gx-lg-5 align-items-center" key={turbo.id}>
                  <div class="col-md-6">
                    <img
                      class="card-img-top mb-5 mb-md-0"
                      src={turbo.image}
                      alt={turbo.title}
                    ></img>
                  </div>
                  <div class="col-md-6">
                    <h1 class="display-5 fw-bolder">{turbo.title}</h1>
                    <p class="lead">{turbo.longDescription}</p>
                    <div class="d-flex">
                      <button
                        className="btn btn-outline-danger rounded-0"
                        type="submit"
                      >
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Turbo;
