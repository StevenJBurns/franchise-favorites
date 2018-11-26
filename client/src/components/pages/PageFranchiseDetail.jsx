import React from "react";

import { AppContext } from "../app/App.jsx";

import "./PageFranchiseDetail.css";


const PageFranchiseDetail = (props) => {
  return (
    <AppContext.Consumer>
      {
      ({ user, franchises}) => (
        franchises.selected && 
          <main>
            { !user.isAuthenticated && <h2 id="h2-not-authorized">YOU NEED TO LOG IN</h2> }
            <h2>{franchises.selected.title}</h2>
            <ul id="ul-franchise-movies">
              {
                franchises.selected.movies.map((movie, index) => (<li key={index}>{movie}</li>))
              }
            </ul>
          </main>
        )
      }
    </AppContext.Consumer>

  );
};

export default PageFranchiseDetail;
