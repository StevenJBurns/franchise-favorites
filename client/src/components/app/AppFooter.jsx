import React from "react";

import "./AppFooter.css";


const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="app-footer">
      <h4>&copy; {year} &bull; Steven J Burns</h4>
    </footer>
  );
}

export default AppFooter;
