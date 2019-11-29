import React from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../app/App.jsx";
import FranchiseTile from "../ui/FranchiseTile.jsx";

import "./PageFranchiseList.css";


const PageFranchiseList = (props) => {  
  const { match } = props;

  return (
    <UserContext.Consumer>
      {
      ({ franchises, changeFranchise }) => (
        <main id="main-franchises">
          <h2>Select a franchise below to start...</h2>
          <ul id="ul-franchise-tiles">
          {
            franchises.list.map((franchise, index) => (
              <li key={index}>
                <FranchiseTile {...props} franchise={franchise} changeFranchise={changeFranchise}>
                  <Link to={`${match.url}/${franchise.slug}`} />
                </FranchiseTile>
              </li>)
            )
          }
          </ul>
        </main>)
      }
    </UserContext.Consumer>

  );
};

export default PageFranchiseList;
