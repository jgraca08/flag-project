import React from "react";
import "./App.css";
import Navbar from "../../src/components/Navbar.jsx";
import Slideshow from "../components/Slideshow";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Section from "../components/Section";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <Cards></Cards>
      <Section></Section>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
