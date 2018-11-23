import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import PageHome from "../pages/PageHome";
import PageRegister from "../pages/PageRegister";
import PageLogin from "../pages/PageLogin";
import PageFranchises from "../pages/PageFranchises";
import PageFavorites from "../pages/PageFavorites";
import Page404 from "../pages/Page404";

import ProtectedRoute from "../auth/ProtectedRoute.jsx";


const AppMain = () => {
  return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/login" component={PageLogin} />
          <Route exact path="/register" component={PageRegister} />
          <Route exact path="/franchises" component={PageFranchises} />
          <ProtectedRoute path="/favorites" component={PageFavorites} />
          {/* <Route exact path="/favorites" component={PageFavorites} /> */}
          <Route component={Page404} />
        </Switch>
      </React.Fragment>
  );
};

export default withRouter(AppMain);