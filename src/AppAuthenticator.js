import React from "react";
import Login from "./pages/Login";
import App from "./App";

import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Synchronize from "./pages/Synchronize";

export default function AppAuthenticator() {
  const { isAuth = false, isSync = false } = useSelector(
    (state) => state.login
  );

  return isAuth && isSync ? (
    <App />
  ) : (
    <Container>
      <Switch>
        <Route path="/synchronize">
          <Synchronize />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Container>
  );
}
