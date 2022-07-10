import React, { useState } from "react";
import Favorites from "./Favorites.jsx";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" href="#">
          <img
            src="../images/logo.svg"
            alt="logo"
            width="150"
            height="50"
            className="d-inline-block align-text-top"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active fw-bold text-white" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-link fw-bold text-white" href="#">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link fw-bold text-white" href="#">
                Products
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to={"/contactus"} className="nav-link fw-bold text-white">
                Contacts
              </Link>
            </li>
          </ul>
          <Favorites></Favorites>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
