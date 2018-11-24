/* React and React Route DOM imports */
import React from "react";
import { Route, Redirect } from "react-router-dom";

/* Import the user context component to be used as consumer */ 
import { CurrentUserContext } from "../app/App.jsx";


const ProtectedRoute = ({ component: Component, ...rest}) => (
  <CurrentUserContext.Consumer>
    { ({state}) => (
      <Route { ...rest } render={ props => (
        state.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      )} />)
    }
  </CurrentUserContext.Consumer>
);

export default ProtectedRoute;
