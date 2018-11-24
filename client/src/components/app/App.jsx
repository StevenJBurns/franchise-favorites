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
      userEmail: null,
      favorites: [],
      isAuthenticated: false,
      errors: []
    }
  }

  updateUser = (email, favorites, authenticated) => {
    this.setState({ userEmail: email, favorites, isAuthenticated: authenticated });
  }

  register = (e) => {
    e.preventDefault();

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

  login = async (email, password) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (localStorage.getItem("jwt_token")) {
      headers['Authorization'] = `Bearer ${localStorage.getItem("jwt_token")}`;
    };
    
    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    await fetch("/auth/login", {
      method: "POST",
      mode: "cors",
      headers: headers,
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(requestBody)
    })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);

      return res.json();
    })
    .then(body => {
      localStorage.setItem("jwt_token", body.token);
      console.log(this.isTokenExpired());
    })
    .catch(err => {
      this.setState({ fetchError: true });
      console.error(err);
    });
  };

  logout = (e) => {
    console.log("Logging out");
    localStorage.setItem("jwt_token", null);
    this.setState({userEmail: null, favorites: [], isAuthenticated: false});
  }

  render() {
    const values = {
      state: this.state,
      updateUser: this.updateUser,
      logout: this.logout
    };

    return (
      <React.Fragment>
        <CurrentUserContext.Provider value={values}>
          <AppHeader />
          <AppNav />
          <AppMain updateUser={this.updateUser} />
          <AppFooter />
        </CurrentUserContext.Provider>
      </React.Fragment>
    );
  };
};

export default App;
