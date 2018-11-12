import React from "react";
import { PromiseProvider } from "mongoose";


const AppHeader = (props) => {
  return (
    <header id="app-header">{props.children}</header>
  );
};

export default AppHeader;