import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../views/Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Products from "./Products";
import Turbo from "./Turbo";
import { GlobalProvider } from "../context/GlobalState";
import Favorites from "./Favorites";

const Content = () => (
    <main className="Content">
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/original/:turbo" element={<Turbo />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<NotFound />} />1
      </Routes>
      </GlobalProvider>
    </main>
  );

export default Content;

