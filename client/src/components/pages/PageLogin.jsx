import React from "react";
import { AuthContext } from "../../index.js";

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
    e.preventDefault();

    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    let user = await fetch("/auth/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(requestBody)
    })

    user = await user.json();
    console.log(user);
  };

  componentDidMount() {

  }

  render() {
    return (
      <AuthContext.Consumer>
        {
          ({ updateUser }) => (
            <main>
              <form id="form-login" onSubmit={this.handleSubmit}>
                <label htmlFor="email">email</label>
                <input type="email" id="input-email" name="email" onChange={this.handleChange} />
                <label htmlFor="password">password</label>
                <input type="password" id="input-password" name="password" onChange={this.handleChange} />
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
