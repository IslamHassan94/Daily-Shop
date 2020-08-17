import React from "react";
import "./Products.css";
import AddIcon from "@material-ui/icons/Add";
import {useStateValue} from "../StateProvider";
import {useHistory} from "react-router-dom";

function Products({id, title, image, price, rating}) {
  const [{cart, user}, dispatch] = useStateValue();
  const history = useHistory();

  const addToCart = () => {
    {
      !user
        ? history.push("/signin")
        : dispatch({
            type: "ADD_TO_CART",
            item: {
              id: id,
              title: title,
              price: price,
              rating: rating,
              image: image,
            },
          });
    }
  };
  return (
    <div className='products'>
      <div className='product__card'>
        <div className='product__info'>
          <h3 className='product__cardTitle'>{title}</h3>
          <p className='product__cardPrice'>
            <small>£</small>
            <strong>
              <b>{price}</b>
            </strong>
          </p>
          <div className='product__cardRating'>
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt='img' className='product__cardImage' />
        <button onClick={addToCart} className='product__addToCart'>
          <p>Add To Cart</p> <AddIcon />
        </button>
      </div>
    </div>
  );
}

export default Products;
