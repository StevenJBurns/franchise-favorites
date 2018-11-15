import React from "react";

import "./PageSignUp.css";


class PageSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(e) {
    e.preventDefault();
    
    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    console.log(requestBody);
  }

  render() {
    return (
      <main>
        <form id="form-sign-up">
          {/* <label for="input-first-name">First Name</label>
          <input type="text" id="input-first-name"/>
          <label for="input-last-name">Last Name</label>
          <input type="text" id="input-last-name"/> */}
          <label for="input-email">email</label>
          <input type="email" id="input-email"/>
          <label for="input-password">password</label>
          <input type="password" id="input-password"/>
          <button type="submit" onClick={this.handleFormSubmit}>SUBMIT</button>
        </form>
      </main>
    );
  };
};

export default PageSignUp;
