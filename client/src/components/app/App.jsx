import React from 'react';

/* Local Component Imports */
import AppHeader from "./AppHeader.jsx";
import AppMain from "./AppMain.jsx";
import AppNav from "./AppNav.jsx";
import AppFooter from "./AppFooter.jsx";

/* Context API Imports */
import { AuthProvider } from "../../index.js";

/* Style and Asset Imports */
import '../../styles/App.css';
import './AppComponents.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      isAuthenticated: true,
      isAuthorized: false,
    }
  }

  logout = (e) => this.setState({isAuthenticated: false});

  render() {
    const { userEmail, isAuthenticated, } = this.state;

    return (
      <AuthProvider value={{ userEmail, isAuthenticated, logout: this.logout}} >
        <React.Fragment>
          <AppHeader />
          <AppNav />
          <AppMain />
          <AppFooter />
        </React.Fragment>
      </AuthProvider>
    );
  };
};

export default App;
