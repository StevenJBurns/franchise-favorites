import React from "react";
import { AuthContext } from "../../index.js";

import "./PageRegister.css";


class PageRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleInputChange(e) {
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

  handleFormSubmit(e) {
    e.preventDefault();
    
    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    fetch("/api/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(requestBody)
    })
    .then((res) => console.log(res));
  }

  render() {
    return (
      <AuthContext.Consumer>
        {
          ({ register }) => (
            <main>
              <form id="form-sign-up">
                <label htmlFor="input-email">email</label>
                <input type="email" id="input-email" onChange={this.handleInputChange} />
                <label htmlFor="input-password">password</label>
                <input type="password" id="input-password" onChange={this.handleInputChange} />
                <button type="submit" onClick={register}>SUBMIT</button>
              </form>
            </main>
          )
        }
      </AuthContext.Consumer>
    );
  };
};

export default PageRegister;
