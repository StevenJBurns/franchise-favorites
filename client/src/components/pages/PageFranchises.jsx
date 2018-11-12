import React from "react";

import FranchiseTile from "../ui/FranchiseTile.jsx";


const testData = [
  { title: "Marvel", imageURL: "" },
  { title: "Star Wars", imageURL: "" },
  { title: "Harry Potter",imageURL: "" },
  { title: "Mission Impossible", imageURL: "" },
  { title: "Fast & Furious", imageURL: "" },
  { title: "Aliens", imageURL: "" }
];

const PageFranchises = () => {
  return (
    <main>
      <h1>PAGE FRANCHISES</h1>
      <ul>
        {/* {testData.map((item, index) => (<li key={index}>{item}</li>))} */}
      </ul>
      <section id="section-franchise-tiles">
        { testData.map((item, index) => (<FranchiseTile title={item.title} imageURL={item.imageURL} />)) }
      </section>
    </main>
  );
};

export default PageFranchises;