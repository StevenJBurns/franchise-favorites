import React from "react";
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from "../app/App.jsx";

import "./Authentication.css";


const Authentication = (props) => {
  return (
    <CurrentUserContext.Consumer>
      {        
      ({ userEmail, isAuthenticated, logout}) => {
        let status = isAuthenticated ? <h6 id="h6-logged-in">{userEmail}</h6> : <h6 id="h6-not-logged-in">NOT LOGGED IN</h6>
        let visible = isAuthenticated ? {display: "block"} : {display: "none"};
        let hidden = isAuthenticated ? {display: "none"} : {display: "block"};
      
        return (
          <section>
            <ul>
              <li style={hidden}><NavLink to="/login" exact>LOGIN</NavLink></li>
              <li style={hidden}><NavLink to="/register" exact>REGISTER</NavLink></li>
              <li style={visible} onClick={props.logout}><NavLink to="/" exact>LOGOUT</NavLink></li>
            </ul>
            { status }
          </section>
        )}
      }
    </CurrentUserContext.Consumer>
  );
};

export default Authentication;