//setup data layer
//We need this to track the basket
import React from "react";
import {createContext, useContext, useReducer} from "react";

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({reducer, intialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we used inside a componenet
export const useStateValue = () => useContext(StateContext);
