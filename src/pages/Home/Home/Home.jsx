import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import OurProducts from "../OurProducts/OurProducts";
import HotDeals from "../HotDeals/HotDeals";
import ShopNow from "../ShopNow/ShopNow";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <HotDeals /> */} {/* TODO: need to fix key error */}
      <Offers />
      <OurProducts />
      <ShopNow />
    </div>
  );
};

export default Home;
