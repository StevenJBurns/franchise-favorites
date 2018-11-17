import React from 'react';

/* Local Component Imports */
import AppHeader from "./AppHeader.jsx";
import AppMain from "./AppMain.jsx";
import AppNav from "./AppNav.jsx";
import AppFooter from "./AppFooter.jsx";

/* Context API Imports */
import { AuthContext } from "../../index.js";

/* Style and Asset Imports */
import '../../styles/App.css';
import './AppComponents.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userEmail: "stevenjburns",
        isAuthenticated: true,
        isAuthorized: false
      }
    }
  }

  updateUser = (user) => {
    console.log("updateUser function!");
  }

  register = (e) => {
    e.preventDefault();
    console.log(e.target);
    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    fetch("/auth/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(requestBody)
    })
    .then((res) => console.log(res));
  };

  logout = (e) => this.setState({isAuthenticated: false});

  render() {
    return (
      <AuthContext.Provider value={{ currentUser: this.state.currentUser, updateUser: this.updateUser }} >
        <React.Fragment>
          <AppHeader />
          <AppNav />
          <AppMain />
          <AppFooter />
        </React.Fragment>
      </AuthContext.Provider>
    );
  };
};

export default App;
