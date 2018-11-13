import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import PageHome from "../pages/PageHome";
import PageSignUp from "../pages/PageSignUp";
import PageSignIn from "../pages/PageSignIn";
import PageMyFavorites from "../pages/PageMyFavorites";
import PageFranchises from "../pages/PageFranchises";
import Page404 from "../pages/Page404";


const AppMain = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/signup" component={PageSignUp} />
        <Route exact path="/signin" component={PageSignIn} />
        <Route exact path="/franchises" component={PageFranchises} />
        <Route exact path="/my-favorites" component={PageMyFavorites} />
        <Route component={Page404} />
      </Switch>
    </React.Fragment>
  );
};

export default withRouter(AppMain);