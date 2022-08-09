import React from 'react';


import Image from 'next/image';
import { Head } from 'next/document';

import Arrow from '@icons/flechita.svg';

import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <>
    <Head>
      <title>Checkout</title>
    </Head>
    <div className={styles['my-order']}>
      <div className={styles['my-order-container']}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles['my-order-content']}>
          <div className={styles.order}>
            <p>
              <span>04.24.25</span>
              <span>7 articulos</span>
            </p>
            <p>$560.00</p>
            <Image src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;
