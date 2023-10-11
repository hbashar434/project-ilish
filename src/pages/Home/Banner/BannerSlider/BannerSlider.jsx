import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css'
import bannerImage1 from "../../../../assets/BannerImages/Slider/HilsaFish.jpg"
import bannerImage2 from "../../../../assets/BannerImages/Slider/Fishing.jpg"
import bannerImage3 from "../../../../assets/BannerImages/Slider/HilsaFish2.jpg"
import "./BannerSlider.css"

const BannerSlider = () => {

    const options = {
        type: 'fade',
        gap: '1rem',
        focus: 'center',
        // autoWidth: true,
        autoplay: false,
        pauseOnHover: false,
        resetProgress: true,
        // lazyLoad: 'nearby',
        rewind: true,


    };

    // new Splide('.splide').mount();

    return (
        <section>
            <Splide hasTrack={false}
                options={options}
                aria-label="My Favorite Images"
                className='splide grid justify-items-center'
                data-splide-interval="1000"
            >
                <SplideTrack >
                    <SplideSlide>
                        <img
                            src={bannerImage1}
                            className='object-cover w-full'
                            alt="bannerImage1" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="bg-black rounded bg-opacity-50 text-white text-xs lg:text-xl p-4"
                                style={{ width: "70%" }}
                            >
                                <h2>This is a headline</h2>
                                <p>This is a paragraph</p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            src={bannerImage2}
                            className='object-cover w-full'
                            alt="bannerImage2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            src={bannerImage3}
                            className='object-cover w-full'
                            alt="bannerImage3" />
                    </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows" />

            </Splide>

        </section>
    );
};

export default BannerSlider;