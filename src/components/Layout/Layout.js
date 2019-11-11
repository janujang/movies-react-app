import React, { Component } from "react";
import Posters from "../Posters/Posters";
import PosterInfo from "../PosterInfo/PosterInfo";
import { Route, Switch } from "react-router-dom";
import Toolbar from "../Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Switch>
          <Route path="/:category" exact component={Posters} />
          <Route path="/popular" exact component={Posters} />
          <Route path="/movies/:id" component={PosterInfo} />
        </Switch>
      </div>
    );
  }
}

export default Layout;
