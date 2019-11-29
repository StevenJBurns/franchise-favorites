import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../../routes/ProtectedRoute.jsx";
import { PageHome } from "../../pages/PageHome";
import { PageRegister } from "../../pages/PageRegister";
import { PageLogin } from "../../pages/PageLogin";
import { PageFranchiseList } from "../../pages/PageFranchiseList";
import { PageFranchiseDetail } from "../../pages/PageFranchiseDetail";
import { PageFavorites } from "../../pages/PageFavorites";
import { Page404 } from "../../pages/Page404";

export const AppRouter = () => (
  <Switch>
    <Route exact path="/">
      <PageHome />
    </Route>>
    <Route exact path="/login">
      <PageLogin />
    </Route>
    <Route exact path="/register">
      <PageRegister />
    </Route>
    <Route exact path="/franchises">
      <PageFranchiseList />
    </Route>>
    <Route exact path="/franchises/:slug">
      <PageFranchiseDetail />
    </Route>
    <ProtectedRoute exact path="/favorites">
      <PageFavorites />
    </ProtectedRoute>
    <Route>
      <Page404 />
    </Route>
  </Switch>
);

export default AppRouter;