import React from "react";
import { Redirect } from "react-router-dom";

/* Font Awesome! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import "./PageRegister.css";


class PageRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isFormValid: false,
      redirectToLogin: false,
      fetchError: false
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

    await fetch("/auth/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(requestBody)
    })
    .then(res => {
      if (!res.ok) throw new Error(res.json()["error"]);
      return res.json();
    })
    .then(obj => {
      console.log(obj)
      this.setState({ redirectToLogin: true });
      return obj;
    })
    .catch(err => {
      this.setState({ fetchError: true });
      console.error(err);
    });
  };

  validateForm = () => {

  }

  render() {
    if (this.state.redirectToLogin) return <Redirect to="/login" />

    return (
      <main>
        <form id="form-register" onSubmit={this.handleSubmit}>
          <FontAwesomeIcon icon={faUserPlus} size="2x" />
          <h2>REGISTER</h2>
          <hr></hr>
          <label htmlFor="input-email">email</label>
          { this.state.fetchError && <h5>That email is already used</h5> }
          <input type="email" id="input-email" name="email" onChange={this.handleInputChange} required />
          <label htmlFor="input-password">password</label>
          <input type="password" id="input-password" name="password" onChange={this.handleInputChange} required />
          <input type="submit" value="SUBMIT" />
        </form>
      </main>
    );
  };
};

export default PageRegister;
