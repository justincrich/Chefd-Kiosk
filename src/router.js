import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StartController,
  EngagementController,
  OptInController,
  ResultsController,
  Menu
} from "controllers";
import DirectOffer from "components/pages/direct_offer/direct_offer_discount";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/direct-offer" component={DirectOffer} />
          <Route
            path="/:page(engagement)/:engagement(foodie|foodtrivia)/"
            component={EngagementController}
          />
          <Route path="/:page(opt-in)" component={OptInController} />
          <Route path="/results" component={ResultsController} />
          <Route path="/engagement-start" component={StartController} />
          <Route path="/*" component={Menu} />
        </Switch>
      </BrowserRouter>
    );
  }
}
