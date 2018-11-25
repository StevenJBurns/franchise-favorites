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
export const AppContext = React.createContext({});


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        userEmail: null,
        isAuthenticated: false,
        favorites: []
      },
      franchises: {
        list: [],
        selected: null
      },
      errors: []
    }
  }

  async componentDidMount() {
    /* Grab the franchise list via the server API and save it to this.state */
    await fetch("/api/franchises")
      .then(res => res.json())
      .then(data => this.setState({franchises: {...this.state.franchises, list: data}}));
  }

  updateUser = (userEmail, favorites, isAuthenticated) => {
    this.setState({ currentUser: { userEmail, favorites, isAuthenticated }});
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
      user: this.state.currentUser,
      franchises: this.state.franchises,
      updateUser: this.updateUser,
      logout: this.logout
    };

    return (
      <React.Fragment>
        <AppContext.Provider value={values}>
          <AppHeader />
          <AppNav />
          <AppMain updateUser={this.updateUser} />
          <AppFooter />
        </AppContext.Provider>
      </React.Fragment>
    );
  };
};

export default App;
