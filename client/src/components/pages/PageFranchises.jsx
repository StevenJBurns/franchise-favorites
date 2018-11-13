import React from "react";

import FranchiseTile from "../ui/FranchiseTile.jsx";


class PageFranchises extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      franchises: []
    };
  }


  componentDidMount() {
    fetch("/api/franchises")
      .then(data => data.json())
      .then(json => this.setState({franchises: json}));
  }

  render() {
    return (
      <main>
        <section id="section-franchise-tiles">
          { this.state.franchises.map((item, index) => (<FranchiseTile key={index} title={item.title} imageURL={item.imageURL} />)) }
        </section>
      </main>
    );
  };
};

export default PageFranchises;