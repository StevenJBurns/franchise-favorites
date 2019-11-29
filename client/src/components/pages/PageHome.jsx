import React from "react";
import { Link } from "react-router-dom";

import "./PageHome.css";


export const PageHome = () => {
  return (
    <main id="main-home">
      <p className="p-home"><strong>Franchise &#9733; Favorites</strong> is a simple little app where you can rank order your favorite movies within a franchise or even the franchises themselves.</p>
      <p className="p-home">To get started making your own lists you will need to <Link to="/register">register</Link> and <Link to="/login">log in</Link>.</p>
    </main>
  );
};

export default PageHome;