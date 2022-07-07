import React from "react";
import {Routes, Route} from 'react-router-dom';
import Products from "../views/Products";
import Home from "../views/Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";


const Content = () => (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );

export default Content;

