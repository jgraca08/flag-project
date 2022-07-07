import React, { useEffect, useState } from "react";

const ProductCard = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [turbos, setTurbos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/turbos.json")
      .then((res) => { console.log(res)
        res.json()}
        )

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
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    );
  } else {
    return (
      <>
        {turbos.map((turbo, index) => {
          return (
            <div classNameName="container mt-4 mb-4">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div key={index} className="card">
                    <img
                      src="..."
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
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
              </div>
            </div>
          );
        })}
      </>
    );
  }
};

export default ProductCard;
