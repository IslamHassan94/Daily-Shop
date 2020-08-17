import React from "react";
import "./Paid.css";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Paid() {
  return (
    <div className='paid'>
      <Link to='/'>
        <div className='sign__backToHome'>
          <ArrowBackIosIcon />
          <h3>Back to the home Page</h3>
        </div>
      </Link>
      <h1>Don`t Wory All Paid</h1>
      <h2>Enjoy it</h2>
    </div>
  );
}

export default Paid;
