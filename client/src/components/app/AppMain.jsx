import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import PageHome from "../pages/PageHome";
import PageSignUp from "../pages/PageRegister";
import PageSignIn from "../pages/PageLogin";
import PageFranchises from "../pages/PageFranchises";
import PageFavorites from "../pages/PageFavorites";
import Page404 from "../pages/Page404";


const AppMain = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/register" component={PageSignUp} />
        <Route exact path="/login" component={PageSignIn} />
        <Route exact path="/franchises" component={PageFranchises} />
        <Route exact path="/favorites" component={PageFavorites} />
        <Route component={Page404} />
      </Switch>
    </React.Fragment>
  );
};

export default withRouter(AppMain);