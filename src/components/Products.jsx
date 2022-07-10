import React, { useEffect, useState } from "react";
import Turbos from "./Turbos";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://62a0f7fb039c39cc8232a97d.mockapi.io/api/v1/categories")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCategories(data);
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
      <div className="container mb-5 mt-5">
        <div className="row">
       
            {categories.map((category, index) => {
              return (
                <div className="col-sm-6" key={index}>
            <div className="card bg-dark text-white rounded-0">
        
              <img
                src={category.imageCategory}
                className="card-img"
                alt="..."
              ></img>
            
              <div className="card-img-overlay">
                <h4 className="card-title">{category.category}</h4>
                <a href={"/products/" + category.id } className="btn btn-sm btn-danger rounded-0">
                  More
                </a>
              </div>
            </div>
          </div>
          
              );
            })}
          
        </div>
      </div>
      
      <Turbos></Turbos>
    </>
    );
  }
};

export default Products;
