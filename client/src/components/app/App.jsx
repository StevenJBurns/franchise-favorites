import React from 'react';

/* Local Component Imports */
import AppHeader from "./AppHeader.jsx";
import AppMain from "./AppMain.jsx";
import AppNav from "./AppNav.jsx";
import AppFooter from "./AppFooter.jsx";


/* Style and Asset Imports */
import '../../styles/App.css';
import './AppComponents.css';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppNav />
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
