import React from "react";
import decodeJWT from "jwt-decode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "../app/App.jsx";
import "./PageLogin.css";
export class PageLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      isFormValid: false,
      redirectToHome: false,
      fetchError: false
    };
  };
  static contextType = UserContext;

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async (e) => {
    /* Catch the default form POST because this is React; reset error state */
    e.preventDefault();
    this.setState({fetchError: false})

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
    .then(data => {
      localStorage.setItem("jwt_token", data.token);
      this.props.updateUser(data.userEmail, data.favorites, true);
    })
    .catch(err => {
      this.setState({ fetchError: true });
      console.error(err);
    });
  };

  isLoggedIn = () => {
    let token = localStorage.getItem("jwt.token");
    return token && this.isTokenExpired() ? true : false;
  };

  isTokenExpired = () => {
    let token = localStorage.getItem("jwt_token");
    let decodedToken = decodeJWT(token);
    return decodedToken.exp < Date.now() ? false : true;
  }

  render() {
    return (
      <main id="main-login">
        <form id="form-login" onSubmit={this.handleSubmit}>
          <FontAwesomeIcon icon={faLock} size="2x" />
          <h2>LOGIN</h2>
          <hr></hr>
          <label htmlFor="email">email</label>
          <input type="email" id="input-email" name="email" onChange={this.handleChange} required />
          <label htmlFor="password">password</label>
          <input type="password" id="input-password" name="password" onChange={this.handleChange} required />
          { this.state.fetchError && <h5>BAD PASSWORD</h5> }
          <input type="submit" value="SUBMIT" />
          <h4>Forgot Your Password?!?</h4>
          <hr></hr>
          <section>
            <button type="submit">FACEBOOK</button>
            <button type="submit">TWITTER</button>
          </section>
        </form>
      </main>
    );
  };
};

PageLogin.contextType = UserContext;

export default PageLogin;
