import React from "react";
import { NavLink } from 'react-router-dom';
import { UserContext } from "../app/App.jsx";

import "./Authentication.css";


export const AuthenticationPanel = props => {
  const user = React.useContext(UserContext);

  console.log(user);

  return null

  // return (
  //   <UserContext.Consumer>
  //     {        
  //     ({ user, logout }) => {
  //       let status = user.isAuthenticated ? <h6 id="h6-logged-in">{user.userEmail}</h6> : <h6 id="h6-not-logged-in">NOT LOGGED IN</h6>
  //       let visible = user.isAuthenticated ? {display: "block"} : {display: "none"};
  //       let hidden = user.isAuthenticated ? {display: "none"} : {display: "block"};
      
  //       return (
  //         <section>
  //           <ul>
  //             <li style={hidden}><NavLink to="/login" exact>LOGIN</NavLink></li>
  //             <li style={hidden}><NavLink to="/register" exact>REGISTER</NavLink></li>
  //             <li style={visible} onClick={logout}><NavLink to="/" exact>LOGOUT</NavLink></li>
  //           </ul>
  //           { status }
  //         </section>
  //       )}
  //     }
  //   </UserContext.Consumer>
  // );
};

export default AuthenticationPanel;