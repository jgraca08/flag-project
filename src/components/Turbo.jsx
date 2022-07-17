import React, { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import Posts from "../views/Posts";
import Spiner from "./Spiner";
import { GlobalContext } from "../context/GlobalState";

const Turbo = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [turbos, setTurbos] = useState([]);

  const {
    addTurboToWatchlist, watchlist
  } = useContext(GlobalContext);


  

  var { category, turbo } = useParams();

  useEffect(() => {
    fetch(
      "https://62a0f7fb039c39cc8232a97d.mockapi.io/api/v1/categories/" + category + "/original/" + turbo
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setTurbos([data]);
          // console.log("console aqui", data);
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
      <Spiner></Spiner>
    );
  } else {
    // console.log("xpto", turbos);
    return (
      <>
        <div className="container mt-4 mb-4">
            {turbos.map((turbo) => {

              //Evita adicionar 2x o mesmo filme, através do ID - procura no array se o filme já lá está adicionado
  let storedTurbo = watchlist.find(o => o.id === turbo.id)
  const watchlistDisabled =  storedTurbo ? true : false;

              return (
                <div className="row gx-4 gx-lg-5 align-items-center" key={turbo.id}>
                  <div className="col-md-6">
                    <img
                      className="card-img-top mb-5 mb-md-0"
                      src={turbo.image}
                      alt={turbo.title}
                    ></img>
                  </div>
                  <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">{turbo.title}</h1>
                    <p className="lead">{turbo.longDescription}</p>
                    <div className="d-flex">
                      <button 
                      className="btn btn-outline-danger rounded-0" 
                      disabled={watchlistDisabled}
                      type="submit" 
                      onClick={() => addTurboToWatchlist(turbo)}>
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Posts></Posts>
      </>
    );
  }
};

export default Turbo;
