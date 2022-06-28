import React from "react";
import "./App.css";
import Navbar from "../../src/components/Navbar.jsx";
import Slideshow from "../components/Slideshow";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Slideshow></Slideshow>
    </React.Fragment>
  );
}

export default App;
