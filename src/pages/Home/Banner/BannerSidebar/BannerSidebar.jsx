import React from 'react';
import sidebarImage from '../../../../assets/BannerImages/Slider/rawFish2.jpg';

const BannerSidebar = () => {
    return (
        <section className='py-4 lg:py-8 flex justify-center items-center relative'>
            <img
                src={sidebarImage}
                className='object-cover rounded-md'
                alt="sidebarImage" />


            <div className="absolute inset-0 flex items-center justify-center bg-slate-700/30 my-8  rounded-md">
                <div
                    className="text-center  text-white p-4 space-y-2 md:space-y-4"
                    style={{ width: "70%" }}
                >
                    <h2>Call to Order Now</h2>
                    <p>+8801934383655</p>
                    <p>+8801934383655</p>
                    <p>+8801934383655</p>
                    <p>+8801934383655</p>
                    <button className='banner-button'>Shop Now</button>
                </div>
            </div>

        </section>
    );
};

export default BannerSidebar;