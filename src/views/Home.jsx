import React from "react";
import Slideshow from "../components/Slideshow";
import Cards from "../components/Cards";
import Section from "../components/Section";

const Home = (props) => {
  return (
    <React.StrictMode>
      <Slideshow></Slideshow>
      <Cards></Cards>
      <Section></Section>
    </React.StrictMode>
  );
};

export default Home;
