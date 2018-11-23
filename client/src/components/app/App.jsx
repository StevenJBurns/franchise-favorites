import React from 'react';

/* Local Component Imports */
import AppHeader from "./AppHeader.jsx";
import AppMain from "./AppMain.jsx";
import AppNav from "./AppNav.jsx";
import AppFooter from "./AppFooter.jsx";

/* Style and Asset Imports */
import '../../styles/App.css';
import './AppComponents.css';


/* Create a Context API object to be used here as Provider and exported for Consumers */
export const CurrentUserContext = React.createContext({});

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

  logout = (e) => {
    localStorage.setItem("jwt_token", null);
    this.setState({isAuthenticated: false});
  }

  render() {
    return (
      <React.Fragment>
        <CurrentUserContext.Provider value={{ currentUser: this.state.currentUser, updateUser: this.updateUser }} >
          <AppHeader logout={this.logout} />
          <AppNav />
          <AppMain />
          <AppFooter />
        </CurrentUserContext.Provider>
      </React.Fragment>
    );
  };
};

export default App;
