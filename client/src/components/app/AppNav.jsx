import React from "react";
import { NavLink } from 'react-router-dom';

/* Stylesheets */
import "./AppNav.css";


const AppNav = (props) => {
  return (
    <nav id="app-nav">
      <ul>
        <li><NavLink activeClassName="active-navlink" to="/" exact>HOME</NavLink></li>
        <li><NavLink activeClassName="active-navlink" to="/franchises">FRANCHISES</NavLink></li>
        <li><NavLink activeClassName="active-navlink" to="/favorites">MY FAVORITES</NavLink></li>
      </ul>
    </nav>
  );
};

export default AppNav;