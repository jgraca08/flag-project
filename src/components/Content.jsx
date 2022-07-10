import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../views/Home";
import SingleProduct from "../views/SingleProduct";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Performance from "./Performance";
import Products from "./Products";
import Turbo from "./Turbo";


const Content = () => (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/original/:turbo" element={<Turbo />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/single" element={<SingleProduct />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<NotFound />} />1
      </Routes>
    </main>
  );

export default Content;

