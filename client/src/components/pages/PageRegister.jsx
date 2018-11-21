import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../app/App.jsx";

import "./PageRegister.css";


class PageRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isFormValid: false,
      fetchError: false,
      redirectToLogin: false
    }
  }
  
  handleInputChange = (e) => {
    switch (e.target.type) {
      case "email":
        this.setState({"email": e.target.value});
        break;
      case "password":
        this.setState({"password": e.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit = async (e) => {
    /* Catch the default form POST because this is React; reset error state */
    e.preventDefault();
    this.setState({ fetchError: false });

    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    try {
      let user = await fetch("/auth/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(requestBody)
      });
      
      if (!user.ok) throw new Error(user.statusText);

      user = await user.json();
      this.setState({ redirectToLogin: true });

    } catch (error) {
      console.error(error);
      this.setState({ fetchError: true });
    };
    // do something with returned user ?
  };

  validateForm = () => {

  }

  render() {
    if (this.state.redirectToLogin) return <Redirect to="/login" />

    return (
      <AuthContext.Consumer>
        {
          ({ register }) => (
            <main>
              <form id="form-register" onSubmit={this.handleSubmit}>
                <h3>REGISTER</h3>
                <hr></hr>
                <label htmlFor="input-email">email</label>
                { this.state.fetchError && <h5>That email is already used</h5> }
                <input type="email" id="input-email" name="email" onChange={this.handleInputChange} required />
                <label htmlFor="input-password">password</label>
                <input type="password" id="input-password" name="password" onChange={this.handleInputChange} required />
                <input type="submit" value="SUBMIT" />
              </form>
            </main>
          )
        }
      </AuthContext.Consumer>
    );
  };
};

export default PageRegister;
