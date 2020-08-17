import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "../StateProvider";

function CheckoutProduct({id, title, price, rating, image}) {
  const [{cart}, dispatch] = useStateValue();

  const removeFromcart = () => {
    // Remove item from cart...
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromcart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
