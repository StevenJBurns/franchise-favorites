import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import ProtectedRoute from "../routes/ProtectedRoute.jsx";

import PageHome from "../pages/PageHome";
import PageRegister from "../pages/PageRegister";
import PageLogin from "../pages/PageLogin";
import PageFranchiseList from "../pages/PageFranchiseList";
import PageFranchiseDetail from "../pages/PageFranchiseDetail"
import PageFavorites from "../pages/PageFavorites";
import Page404 from "../pages/Page404";


const AppMain = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/login" render={() => <PageLogin updateUser={props.updateUser} />} />
        <Route exact path="/register" component={PageRegister} />
        <Route exact path="/franchises" render={props => <PageFranchiseList {...props}  />} />
        <Route path="/franchises/:slug" render={() => <PageFranchiseDetail {...props} changeFranchise={props.changeFranchise} setFavoritesList={props.setFavoritesList} />} />
        <ProtectedRoute path="/favorites" component={PageFavorites} />
        <Route component={Page404} />
      </Switch>
    </React.Fragment>
  );
};

export default withRouter(AppMain);