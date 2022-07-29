import React, { useContext, useState } from "react";

import "@styles/ProductItem.scss";

import ProductDetail from "@containers/ProductDetail";

import AppContext from "@context/AppContext";

import AddToCartSVG from "@icons/bt_add_to_cart.svg";
import addedToCartSVG from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const [toggleProduct, setToggleProduct] = useState(false);

  const {
    state: { cart },
  } = useContext(AppContext);

  const handleClick = (item) => {
    if (cart.includes(item)) {
      return;
    } else {
      addToCart(item);
    }
  };

  const verifyAdded = (item) => {
    if (cart.includes(item)) {
      return addedToCartSVG;
    } else {
      return AddToCartSVG;
    }
  };
  return (
    <div className="ProductItem">
      <img
        src={product.category.image}
        alt={product.title}
        onClick={() => setToggleProduct(!toggleProduct)}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={verifyAdded(product)} />
        </figure>
      </div>
      {toggleProduct && (
        <ProductDetail
          product={product}
          setToggleProduct={setToggleProduct}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default ProductItem;
