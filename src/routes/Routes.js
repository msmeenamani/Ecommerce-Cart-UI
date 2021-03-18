import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../layouts/DashboardComp";
import Home from "../components/HomeComponent";
import Cart from "../layouts/CartComp";
import NotFound from "../components/NotFound"

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
