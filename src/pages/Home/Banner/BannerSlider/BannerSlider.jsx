import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css'
import bannerImage1 from "../../../../assets/BannerImages/Slider/HilsaFish.jpg"
import bannerImage2 from "../../../../assets/BannerImages/Slider/Fishing.jpg"
import bannerImage3 from "../../../../assets/BannerImages/Slider/HilsaFish2.jpg"


import bannerImage4 from "../../../../assets/BannerImages/Slider/Fish.jpg"
import bannerImage5 from "../../../../assets/BannerImages/Slider/Fisherman.jpg"

import "./BannerSlider.css"

const BannerSlider = () => {

    const options = {
        type: 'fade',
        gap: '1rem',
        focus: 'center',
        // autoWidth: true,
        autoplay: true,
        pauseOnHover: false,
        resetProgress: true,
        // lazyLoad: 'nearby',
        rewind: true,
    };

    // new Splide('.splide').mount();

    return (





 <div>


        <section>
            <Splide hasTrack={false}
                options={options}
                aria-label="My Favorite Images"
                className='splide grid justify-center items-center py-4 lg:py-8'
                data-splide-interval="1000"
            >
                <SplideTrack >
                    <SplideSlide>
                        <img
                            src={bannerImage4}
                            className='object-cover w-full rounded-md'
                            alt="bannerImage1" />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-md">
                            <div
                                className="text-center text-white p-4 space-y-2 md:space-y-4"
                                style={{ width: "70%" }}
                            >
                                <h2 className='headline-text'>Fresh ilish at your doorstep</h2>
                                <p className='paragraph-text'>Bengal&apos;s Finest: We offer the best of Bengali ilish</p>
                                <button className='banner-button'>Shop Now</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            src={bannerImage2}
                            className='object-cover w-full rounded-md'
                            alt="bannerImage2" />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-md">
                            <div
                                className="text-center text-white p-4 space-y-2 md:space-y-4"
                                style={{ width: "70%" }}
                            >
                                <h2 className='headline-text'>Taste the Royalty of ilish</h2>
                                <p className='paragraph-text'>Experience the Bengal heritage on your plate</p>
                                <button className='banner-button'>Shop Now</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            src={bannerImage3}
                            className='object-cover w-full rounded-md'
                            alt="bannerImage3" />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-md">
                            <div
                                className="text-center text-white p-4 space-y-2 md:space-y-4"
                                style={{ width: "70%" }}
                            >
                                <h2 className='headline-text'>Dive into Deliciousness Just One Click Away</h2>
                                <p className='paragraph-text'>We&apos;re obsessed with quality, every bite is delightful</p>
                                <button className='banner-button'>Shop Now</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            src={bannerImage1}
                            className='object-cover w-full rounded-md'
                            alt="bannerImage4" />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-md">
                            <div
                                className="text-center text-white p-4 space-y-2 md:space-y-4"
                                style={{ width: "70%" }}
                            >
                                <h2 className='headline-text'>Ilisher Bari: The Finest Hilsa Fish Experience Online</h2>
                                <p className='paragraph-text'>We serve fresh Ilish, straight from the river to your plate.</p>
                                <button className='banner-button'>Shop Now</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <img
                            src={bannerImage5}
                            className='object-cover w-full rounded-md'
                            alt="bannerImage5" />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-md">
                            <div
                                className="text-center text-white p-4 space-y-2 md:space-y-4"
                                style={{ width: "70%" }}
                            >
                                <h2 className='headline-text'>Elevate Your Journey with ilisher Bari</h2>
                                <p className='paragraph-text'>Order fresh ilish delivered straight to your door, hassle-free.</p>
                                <button className='banner-button'>Shop Now</button>
                            </div>
                        </div>
                    </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows" />

            </Splide>

        </section>

        </div>
 







    );
};

export default BannerSlider;