import React from "react";
import "./Home.css";
import products from "../data";
import Products from "./Products";

function Home() {
  return (
    <div className='home'>
      {products.map((product) => (
        <Products
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default Home;
