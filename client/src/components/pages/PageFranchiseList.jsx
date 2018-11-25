import React from "react";
import { Link } from "react-router-dom";

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
      .then(res => res.json())
      .then(data => this.setState({franchises: data}));
  }

  render() {
    const { match } = this.props;

    return (
      <main>
        <section id="section-franchise-tiles">
        {
          this.state.franchises.map((franchise, index) =>
            (
              <div key={index}>
                <FranchiseTile slug={franchise.slug} title={franchise.title} imageURL={franchise.imageURL}>
                  <Link to={`${match.url}/${franchise.slug}`}>{franchise.title}</Link>
                </FranchiseTile>
              </div>
            )
          )
        }
        </section>
      </main>
    );
  };
};

export default PageFranchiseList;
