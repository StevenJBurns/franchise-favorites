import React from 'react';

/* Local Component Imports */
import AppHeader from "./AppHeader.jsx";
import AppMain from "./AppMain.jsx";
import AppNav from "./AppNav.jsx";
import AppFooter from "./AppFooter.jsx";


/* Style and Asset Imports */
import '../styles/App.css';
import './AppComponents.css';
import logo from '../assets/logo.svg';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </AppHeader>
        <AppNav />
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
