import React from "react";
import ProductsCard from "../Home/OurProducts/ProductsCard/ProductsCard";
import { useGetProductsQuery } from "../../redux/features/cart/cartApi";
import Loading from "../Shared/Loading/Loading";
import Error from "../Error/Error";

const Products = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && isError) {
    return <Error />;
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 lg:gap-8 my-10 md:my-16 mx-4 lg:mx-8 xl:mx-0">
        {products?.map((product) => (
          <ProductsCard key={product.baseId} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
