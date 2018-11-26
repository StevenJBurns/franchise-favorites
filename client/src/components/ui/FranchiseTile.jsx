import React from "react";

import "./FranchiseTile.css";


const FranchiseTile = (props) => {
  const { franchise, changeFranchise } = props;
  
  const styleBG = {
    backgroundImage: `url(${franchise.imageURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  };

  return (    
    <article className="article-franchise-tile" style={ styleBG } onClick={() => changeFranchise(franchise)}>
      {props.children}
    </article>
  );
};

export default FranchiseTile;
