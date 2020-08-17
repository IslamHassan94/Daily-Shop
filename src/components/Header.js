import React, {useEffect} from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useStateValue} from "../StateProvider";
import {Link} from "react-router-dom";
import {auth} from "../firebase";

function Header() {
  const [{cart, user}, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='header'>
      <div className='header__Options'>
        <Link to={!user && "/signin"}>
          <div onClick={login} className='header__signin'>
            <span className='header__signInHello'>Hello {user?.email}</span>
            <span className='header__signInUser'>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={user ? "/checkout" : "/signin"}>
          <div className='header__cart'>
            <ShoppingCartIcon className='header__cartIcon' />
            <p className='header__cartCount'>{user ? cart?.length : "0"}</p>
          </div>
        </Link>
      </div>
      <div className='header__title'>
        <h1>Daily Shop</h1>
      </div>
    </div>
  );
}

export default Header;
