import React from "react";
import { useLoaderData } from "react-router-dom";
const ProductDetails = () => {

  const productData = useLoaderData();
  console.log(productData);

  return (
    <section className="text-gray-600 dark:text-gray-300 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="e-commerce"
            className="lg:w-1/2 w-full lg:h-[25rem] h-64 object-cover object-center rounded"
            src="https://i.ibb.co/9W0NSVv/ilish-img3.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 dark:text-gray-300 tracking-widest">
              Hilsha-Home
            </h2>
            <h1 className="text-gray-900 dark:text-gray-100 text-3xl title-font font-medium mb-1">
              The Heart of the River
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-amber-500 dark:text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-amber-500 dark:text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-amber-500 dark:text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-amber-500 dark:text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300 ml-3">
                  4 Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">
              Dive into the enchanting world of the prized Hilsha fish, as you
              explore its migration, culinary importance, and cultural
              significance in a captivating narrative that keeps you hooked from
              start to finish.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 dark:border-gray-700 mb-5">
              <div className="flex items-center">
                <span className="mr-3 font-semibold">Weight</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 dark:text-gray-300 text-base my-bg-tertiary pl-3 pr-10">
                    <option>1</option>
                    <option>2</option>
                    <option>5</option>
                    <option>10</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center dark:text-gray-300 text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-100">
                $513.00
              </span>
              <button className="flex ml-auto text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded">
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-600 p-0 border-0 inline-flex items-center justify-center dark:text-gray-300 text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
