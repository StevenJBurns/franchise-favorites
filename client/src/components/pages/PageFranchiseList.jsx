import React from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../app/App.jsx";
import FranchiseTile from "../ui/FranchiseTile.jsx";
import "./PageFranchiseList.css";

export const PageFranchiseList = (props) => {
  const { match } = useParams();

  console.log('match: ', match);

  return (<h2>PageFranchiseList</h2>);

  // return (
  //   <UserContext.Consumer>
  //     {
  //     ({ franchises, changeFranchise }) => (
  //       <main id="main-franchises">
  //         <h2>Select a franchise below to start...</h2>
  //         <ul id="ul-franchise-tiles">
  //         {
  //           franchises.list.map((franchise, index) => (
  //             <li key={index}>
  //               <FranchiseTile {...props} franchise={franchise} changeFranchise={changeFranchise}>
  //                 <Link to={`${match.url}/${franchise.slug}`} />
  //               </FranchiseTile>
  //             </li>)
  //           )
  //         }
  //         </ul>
  //       </main>)
  //     }
  //   </UserContext.Consumer>
  // );
};

export default PageFranchiseList;
