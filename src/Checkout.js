import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>

          <CheckoutProduct
            title="Cat plushie"
            price={299.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={5}
          />
          <CheckoutProduct
            title="Cat plushieeeeee"
            price={299.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={3}
          />
          <CheckoutProduct
            title="Cat pluaaaaashie"
            price={299.99}
            image="https://i.imgur.com/UNTpXP0.png"
            rating={1}
          />
        </div>
      </div>

      <div className="Checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
