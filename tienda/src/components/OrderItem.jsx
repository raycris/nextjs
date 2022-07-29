import React, { useContext } from "react";

import "@styles/OrderItem.scss";

import AppContext from "@context/AppContext";

import CloseIcon from "@icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.category.image} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={CloseIcon} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
