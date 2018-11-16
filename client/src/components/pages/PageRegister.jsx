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
    console.log(e.target.value);
  }

  render() {
    return (
      <AuthContext.Consumer>
        {
          ({ register }) => (
            <main>
              <form id="form-register" onSubmit={register}>
                <label htmlFor="input-email">email</label>
                <input type="email" id="input-email" name="email" onChange={this.handleInputChange} />
                <label htmlFor="input-password">password</label>
                <input type="password" id="input-password" name="password" onChange={this.handleInputChange} />
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
