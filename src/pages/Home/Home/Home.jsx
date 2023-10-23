import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import OurProducts from "../OurProducts/OurProducts";
import HotDeals from "../HotDeals/HotDeals";

const Home = () => {
  return (
    <div>
      <Banner />
      <HotDeals />
      <Offers />
      <OurProducts />
    </div>
  );
};

export default Home;
