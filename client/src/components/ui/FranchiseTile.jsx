import React from "react";

import "./FranchiseTile.css";


const FranchiseTile = (props) => {
  const styleBG = {
    backgroundImage: `url(${props.imageURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  };

  return (    
    <article className="article-franchise-tile" style={ styleBG }>
      {props.children}
    </article>
  );
};

export default FranchiseTile;
