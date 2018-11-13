import React from "react";

import FranchiseTile from "../ui/FranchiseTile.jsx";


const testData = [
  { title: "Marvel", imageURL: "" },
  { title: "Star Wars", imageURL: "" },
  { title: "Star Trek", imageURL: "" },
  { title: "Harry Potter",imageURL: "" },
  { title: "Mission Impossible", imageURL: "" },
  { title: "Fast & Furious", imageURL: "" },
  { title: "Aliens", imageURL: "" },
  { title: "Die Hard", imageURL: "" },
  { title: "Jurassic", imageURL: "" },
  { title: "Hunger Games", imageURL: "" },
  { title: "Indiana Jones", imageURL: "" },
  {}
];

const PageFranchises = () => {
  return (
    <main>
      <ul>
        {/* {testData.map((item, index) => (<li key={index}>{item}</li>))} */}
      </ul>
      <section id="section-franchise-tiles">
        { testData.map((item, index) => (<FranchiseTile key={index} title={item.title} imageURL={item.imageURL} />)) }
      </section>
    </main>
  );
};

export default PageFranchises;