import React, { useContext, useState } from "react";

import AppContext from "@context/AppContext";

import OrderItem from "@components/OrderItem";


import Arrow from "@icons/flechita.svg";

import styles from "@styles/MyOrder.module.scss"

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div
        className="title-container"
        onClick={() => setToggleOrders(!toggleOrders)}
      >
        <img src={Arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        {cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
