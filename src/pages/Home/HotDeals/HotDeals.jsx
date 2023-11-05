import "swiper/css";
import "./HotDeals.css";
import React from "react";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const HotDeals = () => {
  const fishLists = [
    {
      baseId: "6533b468d1308fa419a0ecc6",
      product_name: "Ilish 800g",
      price: 1000,
      rating: 4.5,
      image: "https://i.ibb.co/d6YKvQy/Ilish-800g.jpg",
    },
    {
      baseId: "6533b468d1308fa419a0ecc7",
      product_name: "Ilish 1000g",
      price: 1250,
      rating: 5,
      image: "https://i.ibb.co/Q958W37/Ilish-1000g.jpg",
    },
    {
      baseId: "6533b468d1308fa419a0ecc8",
      product_name: "Ilish 1200g",
      price: 1500,
      rating: 4.8,
      image: "https://i.ibb.co/GpSknLw/Ilish-1200g.jpg",
    },
    {
      baseId: "6533b468d1308fa419a0ecc9",
      product_name: "Ilish 1500g",
      price: 2000,
      rating: 5,
      image: "https://i.ibb.co/Fg4pF9Y/Ilish-1500g.jpg",
    },
    {
      baseId: "6533b468d1308fa419a0ecd1",
      product_name: "Ilish 1500g",
      price: 2000,
      rating: 5,
      image: "https://i.ibb.co/Fg4pF9Y/Ilish-1500g.jpg",
    },
    {
      baseId: "6533b468d1308fa419a0ecd2",
      product_name: "Ilish 1500g",
      price: 2000,
      rating: 5,
      image: "https://i.ibb.co/Fg4pF9Y/Ilish-1500g.jpg",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div>
            <h1 className="my-text-primary text-6xl font-bold">Hot Deals!</h1>
            <p>Remains until the end of the offer</p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {fishLists.map((fishList) => (
              <div key={fishList.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <SwiperSlide>
                  <div className="border-spacing-3">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="e-commerce"
                        className="object-cover object-center block"
                        src={fishList.image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {fishList.product_name}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {fishList.product_name}
                      </h2>
                      <span className="mt-1">${fishList.price}</span>
                      <span className="mt-1 ml-2 line-through">${fishList.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
