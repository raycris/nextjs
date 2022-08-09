import React from "react";


import ProductItem from "@components/ProductItem";

import useGetProducts from "@hooks/useGetProduct";

import styles from "@styles/ProductList.module.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        {products.map((item) => (
          <ProductItem product={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
