import React from "react";

import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "../../Services/Utils/StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__container">
          <h3 className="checkout__userEmailTitle">
            User Email: {user?.email}
          </h3>
          <h2 className="checkout__title">Shopping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id} // add a unique key prop
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <div className="checkout__container_2">
          <p className="green__text">
            Your order is eligible for FREE Delivery.
          </p>
          <p>Select this option at checkout. Details</p>
          <Subtotal />
          <div className="checkout__sub__emi">
            <p className="checkout__sub__emi__p">EMI Available</p>
            <p>
              Your order qualifies for EMI with valid credit cards (not
              available on purchase of Gold, Jewelry, Gift cards and Amazon pay
              balance top up). Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
