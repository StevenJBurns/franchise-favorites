import React from "react";
import { AuthContext } from "../app/App.jsx";

import "./PageLogin.css";


class PageLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    };
  };
  static contextType = AuthContext;

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async (e) => {
    /* Catch the default form POST because this is React; reset error state */
    e.preventDefault();

    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    try {
      let user = await fetch("/auth/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(requestBody)
      })
  
      if (!user.ok) throw new Error(user.statusText);

      user = await user.json();
      console.log(user);

    } catch (error) {
      console.error(error);
      this.setState({ fetchError: true });
    }
  };

  render() {
    return (
      <AuthContext.Consumer>
        {
          ({ updateUser }) => (
            <main>
              <form id="form-login" onSubmit={this.handleSubmit}>
                <h3>LOGIN</h3>
                <hr></hr>
                <label htmlFor="email">email</label>
                <input type="email" id="input-email" name="email" onChange={this.handleChange} required />
                <label htmlFor="password">password</label>
                <input type="password" id="input-password" name="password" onChange={this.handleChange} required />
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

PageLogin.contextType = AuthContext;

export default PageLogin;
