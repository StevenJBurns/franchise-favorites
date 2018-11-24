import React from "react";

import { Flipper, Flipped } from "react-flip-toolkit";

import FranchiseTile from "../ui/FranchiseTile.jsx";

import "./PageFranchiseList.css";


class PageFranchiseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedTile: null,
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
      <Flipper flipKey={this.state.focusedTile}>
        <section id="section-franchise-tiles">
          {
            this.state.franchises.map((item, index) =>
              (<Flipped flipId={`movie-${index}`} key={`movie-${index}`}>
                <FranchiseTile key={index} title={item.title} imageURL={item.imageURL} />
              </Flipped>)
            )
          }
        </section>
      </Flipper>
    </main>
    );
  };
};

export default PageFranchiseList;
