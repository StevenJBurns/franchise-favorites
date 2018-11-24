import React from "react";
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from "../app/App.jsx";

import "./Authentication.css";


const AuthenticationPanel = (props) => {
  return (
    <CurrentUserContext.Consumer>
      {        
      ({ state, logout }) => {
        let status = state.isAuthenticated ? <h6 id="h6-logged-in">{state.userEmail}</h6> : <h6 id="h6-not-logged-in">NOT LOGGED IN</h6>
        let visible = state.isAuthenticated ? {display: "block"} : {display: "none"};
        let hidden = state.isAuthenticated ? {display: "none"} : {display: "block"};
      
        return (
          <section>
            <ul>
              <li style={hidden}><NavLink to="/login" exact>LOGIN</NavLink></li>
              <li style={hidden}><NavLink to="/register" exact>REGISTER</NavLink></li>
              <li style={visible} onClick={logout}><NavLink to="/" exact>LOGOUT</NavLink></li>
            </ul>
            { status }
          </section>
        )}
      }
    </CurrentUserContext.Consumer>
  );
};

export default AuthenticationPanel;