import React from "react";
import {Routes, Route} from 'react-router-dom';
import Original from "../components/Original";
import Home from "../views/Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Performance from "./Performance";


const Content = () => (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/original" element={<Original />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );

export default Content;

