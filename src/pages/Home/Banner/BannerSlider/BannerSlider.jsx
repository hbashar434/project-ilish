import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css'
import bannerImage1 from "../../../../assets/BannerImages/Slider/HilsaFish.jpg"
import bannerImage2 from "../../../../assets/BannerImages/Slider/Fishing.jpg"
import bannerImage3 from "../../../../assets/BannerImages/Slider/HilsaFish2.jpg"

const BannerSlider = () => {

    const options = {
        type: 'fade',
        gap: '1rem',
        focus: 'center',
        autoWidth: true,
        autoplay: true,
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
                className='splide lg:max-w-5xl grid justify-items-center'
                data-splide-interval="1000"
            >
                <SplideTrack>
                    <SplideSlide>
                        <img src={bannerImage1} alt="bannerImage1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={bannerImage2} alt="bannerImage2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={bannerImage3} alt="bannerImage3" />
                    </SplideSlide>
                </SplideTrack>


                <div className="splide__arrows" />
                {/* <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">Prev</button>
                    <button className="splide__arrow splide__arrow--next">Next</button>
                </div> */}
            </Splide>

        </section>
    );
};

export default BannerSlider;