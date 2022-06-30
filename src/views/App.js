import React from "react";
import "./App.css";
import Navbar from "../../src/components/Navbar.jsx";
import Slideshow from "../components/Slideshow";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <Cards></Cards>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
