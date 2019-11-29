/* React and React Route DOM imports */
import React from "react";
import { Route, Redirect } from "react-router-dom";

/* Import the user context component to be used as consumer */ 
import { UserContext } from "../app/App.jsx";

const ProtectedRoute = ({ component: Component, ...rest}) => {
  const { isAuthenticated } = React.useContext(UserContext);
  
  return (
    <Route { ...rest }>
      { isAuthenticated ? <Component {...rest} /> : <Redirect to="/login" />}
    </Route> 
  )
};

export default ProtectedRoute;
