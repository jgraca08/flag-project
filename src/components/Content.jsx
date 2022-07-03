import React from "react";
import {Routes, Route} from 'react-router-dom';
import Products from "../views/Products";
import Home from "../views/Home";

const Content = () => (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </main>
  );

export default Content

