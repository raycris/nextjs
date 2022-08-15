import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import CloseIcon from '@icons/icon_close.png';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.category.image} alt={product?.title} width="200px" height="200px"/>
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={CloseIcon} alt="close" onClick={() => handleRemove(product)} width="200px" height="200px" />
    </div>
  );
};

export default OrderItem;
