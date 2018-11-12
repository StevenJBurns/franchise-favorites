import React from "react";


const FranchiseTile = (props) => {
  const { title, imageURL } = props;

  return (
    <article className="article-franchise-tile">{title}</article>
  );
};

export default FranchiseTile;