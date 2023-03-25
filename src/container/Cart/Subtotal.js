import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

import ".//Subtotal.css";

import { getBasketTotal } from "../../services/Reducers/reducer";
import { useStateValue } from "../../services/Utils/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
