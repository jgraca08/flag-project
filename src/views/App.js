import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
          <Content></Content>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
