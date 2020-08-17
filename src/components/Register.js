import React, {useState} from "react";
import "./SignIn.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../firebase";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const register = (e) => {
    e.preventDefault(); // This stops refresh
    // Do register logic ...
    if (password === rePassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // created a user and logged in, redirect to home page...
          history.push("/");
        })
        .catch((e) => alert(e.message));
    } else {
      alert("Passwords don`t match");
    }
  };

  return (
    <div className='sigin'>
      <Link to='/'>
        <div className='sign__backToHome'>
          <ArrowBackIosIcon />
          <h3>Back to the home Page</h3>
        </div>
      </Link>
      <from>
        <div className='login-box'>
          <h1>Register</h1>
          <div className='textbox'>
            <PersonIcon className='signin__icon' />
            <input
              onChange={(event) => setEmail(event.target.value)}
              type='email'
              placeholder='Email'
              name=''
              value={email}
            />
          </div>
          <div className='textbox'>
            <LockIcon className='signin__icon' />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              placeholder='Password'
              name=''
              value={password}
            />
          </div>
          <div className='textbox'>
            <LockIcon className='signin__icon' />
            <input
              onChange={(event) => setRePassword(event.target.value)}
              type='password'
              placeholder='Confirm Password'
              name=''
              value={rePassword}
            />
          </div>
          <button className='btn' onClick={register}>
            Create Account
          </button>
        </div>
      </from>
    </div>
  );
}

export default Register;
