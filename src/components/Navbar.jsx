import React, { useState } from "react";
import Search from "../../src/components/Search.jsx";
import Favorites from "./Favorites.jsx";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../images/logo.svg"
            alt="logo"
            width="150"
            height="50"
            class="d-inline-block align-text-top"
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"} class="nav-link active fw-bold text-white" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold text-white" href="#">
                About us
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fw-bold text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={"/products"} class="dropdown-item" >
                    Turbochargers
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Turbochargers 2
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold text-white" href="#">
                Contacts
              </a>
            </li>
          </ul>
          <Favorites></Favorites>
          <Search></Search>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
