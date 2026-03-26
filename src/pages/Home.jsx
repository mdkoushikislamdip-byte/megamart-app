import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/shop/Banner";
import BestDeals from "../components/home/BestDeals";
import Category from "../components/home/Category";
import TopElectronicsBrand from "../components/home/TopElectronicsBrand";
import DailyEssentials from "../components/home/DailyEssentials";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestDeals />
      <Category />
      <TopElectronicsBrand />
      <DailyEssentials />
    </div>
  );
};

export default Home;
