import React from "react";
import "./MProducts.css";

import { useStateValue } from "../../services/Utils/StateProvider";

function MProducts({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="mproducts">
      <div className="mproducts__info">
      <img src={image} alt="" />
        <p>{title}</p>
        <p className="mproducts__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="mproducts__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default MProducts;
