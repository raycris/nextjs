import React from "react";

import "@styles/ProductList.scss";

import ProductItem from "@components/ProductItem";

import useGetProducts from "@hooks/useGetProduct";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((item) => (
          <ProductItem product={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
