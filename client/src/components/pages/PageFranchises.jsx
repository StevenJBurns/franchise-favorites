import React from "react";


const testData = [
  "Marvel",
  "Star Wars",
  "Harry Potter",
  "Mission Impossible",
  "Fast & Furious",
  "Aliens"
];

const PageFranchises = () => {
  return (
    <main>
      <h1>PAGE FRANCHISES</h1>
      <ul>
        {testData.map(item => (<li>{item}</li>))}
      </ul>
    </main>
  );
};

export default PageFranchises;