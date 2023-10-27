import React from 'react';
import sidebarImage from '../../../../assets/BannerImages/Slider/rawFish2.jpg';
import './BannerSidebar.css'
import { Link } from 'react-router-dom';
import { MdCall } from 'react-icons/md';

const BannerSidebar = () => {
    return (
        <section className="py-4 lg:py-8 flex font-medium justify-center md:justify-end items-center">
            <section className="w-10/12 relative rounded-md shadow-lg">
                <img src={sidebarImage} className="rounded-md" alt="profile picture" />
                <div className="bg-slate-900/50 rounded-md absolute inset-0 text-white flex flex-col items-center justify-center">
                    <h2 className='sidebar-headline-text mb-2'>Call or Message <br /> Now to Order</h2>
                    <div className='sidebar-paragraph-text space-y-2 md:space-y-4'>
                        <p className='flex justify-center items-center'><MdCall size={24} /><span className='ml-2'>+88 01572394249</span></p>
                        <p className='flex justify-center items-center'><MdCall size={24} /><span className='ml-2'>+88 01613506705</span></p>
                        <p className='flex justify-center items-center'><MdCall size={24} /><span className='ml-2'>+88 01858985731</span></p>
                        <p className='flex justify-center items-center'><MdCall size={24} /><span className='ml-2'>+88 01517073117</span></p>
                    </div>
                    <Link to="https://wa.me/qr/MTPQZXF2VZXKM1"><button className='sidebar-banner-button'>Message Now</button></Link>
                </div>
            </section>
        </section>
    );
};

export default BannerSidebar;