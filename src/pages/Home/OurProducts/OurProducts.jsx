import React from 'react';
import ProductsCard from './ProductsCard/ProductsCard';
import useProducts from '../../../hooks/useProducts';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const OurProducts = () => {

    const [products] = useProducts();

    return (
        <section className='flex flex-col justify-center items-center bg-[#274C5B] dark:bg-sky-950 my-12 lg:my-40 pt-16 pb-28'>
            <div className='mx-4 lg:mx-16'>
                <div className='flex justify-between items-center gap-4 my-12'>
                    <h2 className='text-heading-2'>We Offer Fresh Ilish for you</h2>
                    <Link to="/products">
                        <button className='flex justify-center items-center primary-button text-slate-950 dark:text-sky-950'>
                            <span className='mr-2'>View All Products</span><FiArrowRight size="20px" />
                        </button>
                    </Link>
                </div>
                <div className='grid justify-center items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {
                        products.map(product => <ProductsCard
                            key={product.baseId}
                            product={product}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurProducts;