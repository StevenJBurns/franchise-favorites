import React from "react";

import { AppContext } from "../app/App.jsx";

import "./PageFranchiseDetail.css";


const PageFranchiseDetail = (props) => {
  const { franchise } = props;
  console.log(franchise);

  return (
    <AppContext.Consumer>
      {
      ({ franchises}) => (
        franchises.selected && 
          <main>
            <h2>{franchises.selected.title}</h2>
          </main>
        )
      }
    </AppContext.Consumer>

  );
};

export default PageFranchiseDetail;
