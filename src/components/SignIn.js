import React, {useState} from "react";
import "./SignIn.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../firebase";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); // This stops refresh
    // Do login logic ...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged in Successfully so , redirect to home page ...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    history.push("/register");
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
          <h1>Login</h1>
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
          <button type='submit' onClick={login} className='btn'>
            Sign in
          </button>
          <button type='button' className='btn' onClick={register}>
            Create Account
          </button>
        </div>
      </from>
    </div>
  );
}

export default SignIn;
