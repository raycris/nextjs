import React from 'react';

import styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <a href="/home" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/home">My account</a>
        </li>
        <li>
          <a href="/home">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
