import React from "react";
import CurrencyFormat from "react-currency-format";

import ".//Subtotal.css";

import { getBasketTotal } from "../../Services/Reducers/reducer";
import { useStateValue } from "../../Services/Utils/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
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
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
