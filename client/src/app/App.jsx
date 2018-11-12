import React from 'react';

import logo from '../assets/logo.svg';
import '../styles/App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    );
  }
}

export default App;
