import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import ReduxRootComponent from "./redux/components/reduxRootComponent";
import MSTRootComponent from "./mst/components/mstRootComponent";
import { Homepage } from "./Homepage"

class AppRoutes extends Component{
  render(){
    return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/mst" component={MSTRootComponent} />
        <Route path="/redux" component={ReduxRootComponent} />
      </Switch>
    );
  }

}

export const AppRouter = withRouter(AppRoutes);
