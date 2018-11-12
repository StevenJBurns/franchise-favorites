import React from "react";
import { NavLink } from 'react-router-dom';


const AppNav = (props) => {
  return (
    <nav id="app-nav">
      <ul>
        <li><NavLink to="/" exact>HOME</NavLink></li>
        <li><NavLink to="/my-favorites">MY FAVORITES</NavLink></li>
        <li><NavLink to="/franchises">FRANCHISES</NavLink></li>
      </ul>
    </nav>
  );
};

export default AppNav;