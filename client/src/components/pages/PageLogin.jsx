import React from "react";
import { AuthContext } from "../../index.js";

import "./PageLogin.css";


class PageLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };
  
  render() {
    return (
      <AuthContext.Consumer>
        {
          ({ login }) => (
            <main>
              <form id="form-login" on onSubmit={login}>
                <label htmlFor="input-email">email</label>
                <input type="email" id="input-email"/>
                <label htmlFor="input-password">password</label>
                <input type="password" id="input-password"/>
                <input type="submit" value="SUBMIT" />
                <hr></hr>
                <section>
                  <button type="submit">FACEBOOK</button>
                  <button type="submit">TWITTER</button>
                </section>
              </form>
            </main>
          )
        }
      </AuthContext.Consumer>
    );
  };
};

export default PageLogin;
