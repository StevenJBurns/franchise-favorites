/* React Imports */
import React from "react";

/* Local Dependency Imports */
import Authentication from "../ui/Authentication.jsx";

/* Font Awesome! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';

/* Stylesheets */
import "./AppHeader.css";


const AppHeader = (props) => {
  return (
    <header id="app-header">
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={ faFilm } size="3x" />
        <FontAwesomeIcon icon={ faStar } size="2x" color="darkOrange" spin />
      </span>
      <h2>FRANCHISE FAVORITES</h2>
      <Authentication className="section-auth" />
    </header>
  );
};

export default AppHeader;
