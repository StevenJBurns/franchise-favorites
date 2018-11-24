/* React and React Route DOM imports */
import React from "react";
import { Route } from "react-router-dom";

/* Import the user context component to be used as consumer */ 
import { CurrentUserContext } from "../app/App.jsx";


const ContextRoute = ({ component: Component, context: Context, ...rest}) => (
  <CurrentUserContext.Consumer>
    { ({ register, login}) => 
      (<Route { ...rest } render={ props => (<Component {...props} />)} />)
    }
  </CurrentUserContext.Consumer>
);

export default ContextRoute;
