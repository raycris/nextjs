import React, { useContext, useState } from 'react';
import Link from 'next/link';

import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';

import Arrow from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']} onClick={() => setToggleOrders(!toggleOrders)}>
        <img src={Arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>

      <div className={styles['my-order-content']}>
        {cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link className={styles['primary-button']} href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
