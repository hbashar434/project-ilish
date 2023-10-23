import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const ProductsCard = ({ product }) => {

    const { product_name, price, rating, image, baseId } = product;

    return (
        <section>
            <div className="group relative block overflow-hidden rounded-md">
                <Link to={`/productDetails/${baseId}`}>
                    <img
                        src={image}
                        alt="Ilish Image"
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />
                </Link>

                <div className="relative border border-gray-100 bg-white p-6">
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{product_name}</h3>

                    <div className='flex justify-between items-center'>
                        <div className="flex justify-center items-center mt-1.5 text-base text-gray-900">Price:<TbCurrencyTaka />{price}</div>
                        <StarRatings
                            rating={parseFloat(rating)}
                            starRatedColor="rgb(249 115 22)"
                            numberOfStars={5}
                            starDimension="18px"
                            starSpacing="1px"
                            name='rating'
                        />
                    </div>

                    <form className="mt-4">
                        <button
                            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                        >
                            Add to Cart
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProductsCard;