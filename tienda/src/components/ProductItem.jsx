import React, { useContext, useState } from 'react';
import Image from 'next/image';

import ProductDetail from '@containers/ProductDetail';

import AppContext from '@context/AppContext';

import AddToCartSVG from '@icons/bt_add_to_cart.svg';
import addedToCartSVG from '@icons/bt_added_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

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
    <div className={styles.ProductItem}>
      <Image src={product.category.image} width={240} height={240} alt={product.title} onClick={() => setToggleProduct(!toggleProduct)}  />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)}>
          <Image src={verifyAdded(product)} width={50} height={50} />
        </figure>
      </div>
      {toggleProduct && <ProductDetail product={product} setToggleProduct={setToggleProduct} handleClick={handleClick} />}
    </div>
  );
};

export default ProductItem;
