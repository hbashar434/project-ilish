import React from "react";
// import "@splidejs/react-splide/css";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import bannerImage1 from "../../../../public/images/fish.jpg";
import Splide from "@splidejs/splide";

const HotDeals = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: true,
  };

  return (
    <section>
      <Splide
        hasTrack={false}
        options={options}
        aria-label="My Favorite Images"
        className="splide container mx-auto grid justify-center items-center"
      >
        <SplideTrack>
          <SplideSlide>
            <img src={bannerImage1} alt="bannerImage1" />
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>
    </section>
  );
};

export default HotDeals;
