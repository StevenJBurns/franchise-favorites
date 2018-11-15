import React from "react";

import "./PageSignIn.css";


const PageSignIn = () => {
  return (
    <main>
      <form id="form-sign-in">
        <label for="input-email">email</label>
        <input type="email" id="input-email"/>
        <label for="input-password">password</label>
        <input type="password" id="input-password"/>
        <button type="submit">SUBMIT</button>
        <hr></hr>
        <button type="submit">FACEBOOK</button>
        <button type="submit">TWITTER</button>
      </form>
    </main>
  );
};

export default PageSignIn;
