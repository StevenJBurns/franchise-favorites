import React from "react";

import "./PageLogin.css";


const PageLogin = () => {
  return (
    <main>
      <form id="form-sign-in">
        <label htmlFor="input-email">email</label>
        <input type="email" id="input-email"/>
        <label htmlFor="input-password">password</label>
        <input type="password" id="input-password"/>
        <button type="submit">SUBMIT</button>
        <hr></hr>
        <section>
          <button type="submit">FACEBOOK</button>
          <button type="submit">TWITTER</button>
        </section>
      </form>
    </main>
  );
};

export default PageLogin;
