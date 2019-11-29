import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../app/App.jsx";

export const ProtectedRoute = props => {
  const { isAuthenticated } = React.useContext(UserContext);
  
  return (
    <Route { ...props }>
      { !isAuthenticated ? {...props.children} : <Redirect to="/login" />}
    </Route> 
  )
};

export default ProtectedRoute;
