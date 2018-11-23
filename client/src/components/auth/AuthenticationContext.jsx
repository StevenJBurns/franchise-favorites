import React from "react";

import authenticateUser from "../../services/authenticateUser";


export const AuthenticationContext = React.createContext({});

const AuthenticationHOC = (Component) => {
  class AuthenticationComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state ={
        isAuthenticated: false
      }
    }



    render() {
      return (
        <AuthenticationContext.Provider value={this.state.isAuthenticated}>
          <Component />
        </AuthenticationContext.Provider>
      )
    }
  }

  return AuthenticationComponent;
};

export default AuthenticationHOC;