import React from "react";
import { Route, Redirect } from "react-router-dom";

import isAuthenticated from "./isAuthenticated.js";


const ContextRoute = ({ component: Component, context: Context, ...rest}) => (
  <Route { ...rest } render={ props => (
    isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
  )} />
);

export default ContextRoute;
