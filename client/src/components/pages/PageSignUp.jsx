import React from "react";

const PageSignUp = () => {
  return (
    <main>
      <form id="form-sign-up">
        <label for="input-first-name">First Name</label>
        <input type="text" id="input-first-name"/>
        <label for="input-last-name">Last Name</label>
        <input type="text" id="input-last-name"/>
        <label for="input-email">email</label>
        <input type="email" id="input-email"/>
        <label for="input-password">password</label>
        <input type="password" id="input-password"/>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default PageSignUp;
