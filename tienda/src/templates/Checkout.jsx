import React from "react";

import Arrow from "@icons/flechita.svg";

const Checkout = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>04.24.25</span>
              <span>7 articulos</span>
            </p>
            <p>$560.00</p>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
