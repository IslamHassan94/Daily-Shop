import React from "react";
import "./Checkout.css";
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Checkout() {
  const [{cart}] = useStateValue();

  return (
    <div className='checkout'>
      <Link to='/'>
        <div className='checkout__backToHome'>
          <ArrowBackIosIcon />
          <h3>Back to the home Page</h3>
        </div>
      </Link>
      <div className='checkout__left'>
        {cart?.length === 0 ? (
          <div>
            <h2 className='checkout__title'>Cart Empty</h2>
            <p>You have no items in your Cart.</p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Cart</h2>

            {/* List out all the checkout products */}
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      <div className='checkout__right'>
        {cart?.length ? <Subtotal /> : null}
      </div>
    </div>
  );
}

export default Checkout;
