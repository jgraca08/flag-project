import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cards = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [turbos, setTurbos] = useState([]);

  var { category } = useParams();
  if (!category) category = 1;

  useEffect(() => {
    fetch(
      "https://62a0f7fb039c39cc8232a97d.mockapi.io/api/v1/categories/" +
        category +
        "/original?page=1&limit=6"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setTurbos(data);
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
    return (
      <>
        <div className="container mt-4 mb-5">
          <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4">
            <button type="button" className="btn btn-outline-danger rounded-0">
              Original
            </button>
            <button type="button" className="btn btn-outline-danger rounded-0">
              Performance
            </button>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {turbos.map((turbo, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card h-100 shadow rounded-0">
                    <div className="inner">
                      <img
                        src={turbo.image}
                        className="card-img-top"
                        alt="turbocharger"
                      ></img>
                    </div>
                    <div className="card-body bg-light">
                      <h5 className="card-title">{turbo.title}</h5>
                      <p className="card-text">{turbo.description}</p>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-danger rounded-0"
                      >
                        More info
                      </a>
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

export default Cards;
