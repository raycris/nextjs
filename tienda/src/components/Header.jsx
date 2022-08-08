import React, { useState, useContext } from "react";


import Menu from "@components/Menu";

import MyOrder from "@containers/MyOrder";

import Logo from "@logos/logo_yard_sale.svg";

import IconMenu from "@icons/icon_menu.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";

import AppContext from "@context/AppContext";

import styles from "@styles/Header.module.scss"
import Image from "next/image";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const { state } = useContext(AppContext);
  return (
    <nav className={styles.Nav}>
      <Image src={IconMenu} alt="menu" className={styles.menu} />

      <div className={styles["navbar-left"]}>
        <Image src={Logo} alt="logo" className={styles["nav-logo"]} />
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Clothes</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Furnitures</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </div>

      <div className={styles["navbar-right"]}>
        <ul>
          <li className={styles["navbar-email"]} onClick={() => setToggle(!toggle)}>
            JoeDumas@example.com
          </li>
          <li
            className={styles["navbar-shopping-cart"]}
            onClick={() => setToggleOrders(!toggleOrders)}
          >
           <Image className={styles["more-clickable-area pointer"]} src={ShoppingCart} alt="shopping cart" />
							{state?.cart?.length > 0 ? <div>{state?.cart?.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && (
        <MyOrder
          toggleOrders={toggleOrders}
          setToggleOrders={setToggleOrders}
        />
      )}
    </nav>
  );
};

export default Header;


