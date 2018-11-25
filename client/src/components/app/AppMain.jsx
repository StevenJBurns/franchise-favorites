import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import PageHome from "../pages/PageHome";
import PageRegister from "../pages/PageRegister";
import PageLogin from "../pages/PageLogin";
import PageFranchiseList from "../pages/PageFranchiseList";
import PageFavorites from "../pages/PageFavorites";
import Page404 from "../pages/Page404";

import ProtectedRoute from "../routes/ProtectedRoute.jsx";


const AppMain = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/login" render={() => <PageLogin updateUser={props.updateUser} />} />
        <Route exact path="/register" component={PageRegister} />
        <Route path="/franchises" component={PageFranchiseList} />
        <ProtectedRoute path="/favorites" component={PageFavorites} />
        <Route component={Page404} />
      </Switch>
    </React.Fragment>
  );
};

export default withRouter(AppMain);