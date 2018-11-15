import React from "react";

import "./FranchiseTile.css";


const FranchiseTile = (props) => {
  const { title, imageURL } = props;
  const styleBG = {
    backgroundImage: `url(${imageURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  };

  return (
    <article className="article-franchise-tile" style={ styleBG }>{title}</article>
  );
};

export default FranchiseTile;