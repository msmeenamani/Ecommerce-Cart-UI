import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../layouts/DashboardComp";
import Home from "../components/HomeComponent";
import NotFound from "../components/NotFound";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
