import React from "react";
import { NavLink } from 'react-router-dom';

import "./Authentication.css";


const Authentication = (props) => {
  return (
    <section>
      <h6>AUTHENTICATION</h6>
      <ul>
        <li><NavLink to="/auth/login" exact>LOGIN</NavLink></li>
        <li><NavLink to="/auth/register" exact>REGISTER</NavLink></li>
        <li><NavLink to="/auth/logout" exact>LOGOUT</NavLink></li>
      </ul>
      <h6 id="h6-not-logged-in">NOT LOGGED IN</h6>
      <h6 id="h6-logged-in">LOGGED IN</h6>
    </section>
  );
};

export default Authentication;