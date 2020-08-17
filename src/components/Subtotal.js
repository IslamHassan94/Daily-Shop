import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../StateProvider";
import {getcartTotal} from "../reducer";
import {useHistory} from "react-router-dom";

function Subtotal() {
  const [{cart}] = useStateValue();
  const history = useHistory();

  const goToPaid = () => {
    history.push("/paid");
  };

  return (
    <div className='subtotal'>
      {/* Price */}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong> {value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getcartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button onClick={goToPaid}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
