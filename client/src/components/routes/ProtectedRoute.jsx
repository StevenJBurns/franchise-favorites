/* React and React Route DOM imports */
import React from "react";
import { Route, Redirect } from "react-router-dom";

/* Import the user context component to be used as consumer */ 
import { UserContext } from "../app/App.jsx";


const ProtectedRoute = ({ component: Component, ...rest}) => (
  <UserContext.Consumer>
    { ({user}) => (
      <Route { ...rest } render={ props => (
        user.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      )} />)
    }
  </UserContext.Consumer>
);

export default ProtectedRoute;
