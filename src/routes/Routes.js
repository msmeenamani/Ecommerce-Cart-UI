import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../layouts/DashboardComp";
import Home from "../components/HomeComponent";
import Cart from "../layouts/CartComp";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default Routes;
