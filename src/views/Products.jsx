import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Products = (props) => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
        <ProductCard></ProductCard>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Products;
