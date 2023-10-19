import React from 'react';
import ProductsCard from './ProductsCard/ProductsCard';
import useProducts from '../../../hooks/useProducts';

const OurProducts = () => {

    const [products] = useProducts();

    return (
        <section>
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </section>
    );
};

export default OurProducts;