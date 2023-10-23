import React from 'react';
import ProductsCard from '../Home/OurProducts/ProductsCard/ProductsCard';
import useProducts from '../../hooks/useProducts';
import productCoverImage from '../../assets/Images/products_coverPhoto.jpg';

const Products = () => {
    const [products] = useProducts();
    return (
        <section>
            <div className='relative'>
                <img
                    src={productCoverImage}
                    alt="Product Cover Image"
                    className="w-screen lg:h-96 object-cover object-center" />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800/30 rounded-md">
                    <div className="text-2xl md:text-5xl lg:text-6xl font-semibold text-center font-my-serif text-white space-y-2 md:space-y-4">
                        <h2>Buy Fresh Ilish</h2>
                        <h2>From our Shop</h2>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 lg:gap-8 my-10 md:my-16 mx-4 lg:mx-8 xl:mx-0'>
                {
                    products.map(product => <ProductsCard
                        key={product.baseId}
                        product={product}
                    />)
                }
            </div>
        </section>
    );
};

export default Products;