import React, {useEffect} from "react";
import "./index.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import Paid from "./components/Paid";

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out..

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any clean up operations go in here..
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/paid'>
            <Paid />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
