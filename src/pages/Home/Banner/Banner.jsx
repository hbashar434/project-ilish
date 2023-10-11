import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import BannerSidebar from './BannerSidebar/BannerSidebar';

const Banner = () => {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-3 p-4 lg:p-8 '>
                <div className='col-span-2'>
                    <BannerSlider />
                </div>
                <div>
                    <BannerSidebar />
                </div>
            </div>
        </section>
    );
};

export default Banner;