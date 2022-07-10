import React, { useEffect, useState } from "react";

const Performance = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [turbos, setTurbos] = useState([]);
  const [turbosOri, setTurbosOri] = useState([]);

  useEffect(() => {
    fetch("data/performance.json")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setTurbos(data);
          setTurbosOri(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    //console.log(TurbosOri);
    if (props.search && props.search.length>0) {
        setTurbos(turbosOri.filter(turbo => turbo.title.toLowerCase().includes(props.search.toLowerCase())));
    } else {
        setTurbos(turbosOri);
    }
},[props.search])

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
      <div className="container mt-4 mb-4">
        <div className="row">
          <h3 className="d-flex justify-content-center mb-5">Performance Turbochargers</h3>
       
            {turbos.map((turbo, index) => {
              return (
                <div className="col-4" key={index}>
                <div className="card mb-4" >
                  <img src={turbo.image} className="card-img-top" alt="..."></img>
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
              );
            })}
          
        </div>
      </div>
    );
  }
};

export default Performance;
