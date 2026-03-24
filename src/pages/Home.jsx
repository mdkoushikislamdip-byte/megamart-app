import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/home/Banner";
import ProductCards from "../components/home/ProductCards";
import Category from "../components/home/Category";
import TopElectronicsBrand from "../components/home/TopElectronicsBrand";


const Home = () => {
  return (
    <div>
      <Banner />
      <ProductCards />
      <Category />
      <TopElectronicsBrand />
    </div>
  );
};

export default Home;
