import React from "react";
import { NavLink } from 'react-router-dom';
import { AuthConsumer } from "../../index.js";

import "./Authentication.css";


const Authentication = (props) => {
  const { isAuthenticated, logout } = props;

  let status = isAuthenticated ? <h6 id="h6-logged-in">stevenjburns</h6> : <h6 id="h6-not-logged-in">NOT LOGGED IN</h6>
  let visible = isAuthenticated ? {display: "block"} : {display: "none"}; 
  let hidden = isAuthenticated ? {display: "none"} : {display: "block"}; 

  return (
    <section>
      <ul>
        <li style={hidden}><NavLink to="/auth/login" exact>LOGIN</NavLink></li>
        <li style={hidden}><NavLink to="/auth/register" exact>REGISTER</NavLink></li>
        <li style={visible} onClick={logout}><NavLink to="/auth/logout" exact>LOGOUT</NavLink></li>
      </ul>
      { status }
    </section>
  );
};

export default Authentication;