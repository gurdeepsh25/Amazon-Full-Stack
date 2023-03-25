import React from "react";
import { useStateValue } from "../../services/Utils/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
            <div className="payment__titleno">
                <h3>1</h3>
            </div>
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>2040</p>
            <p>Sector 44-C</p>
            <p>CHANDIGARH, CHANDIGARH 160047</p>
            <p className="orangeColorHoverUnderLine">Add delivery instructions</p>
          </div>
        </div>
        <div className="payment__section">
        <div className="payment__titleno">
                <h3>2</h3>
            </div>
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
        <div className="payment__section">
        <div className="payment__titleno">
                <h3>3</h3>
            </div>
          <div className="payment__title">
            <h3>Offers</h3>
          </div>
        </div>
        <div className="payment__section">
        <div className="payment__titleno">
                <h3>4</h3>
            </div>
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
