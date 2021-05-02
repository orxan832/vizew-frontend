import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./routers/Main";
import Admin from "./routers/Admin";
import { connect } from "react-redux";
import ScrollToTop from "react-scroll-up";
import { BsChevronUp } from "react-icons/bs";
import ReactNotification from "react-notifications-component";
import { Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReactNotification />
        <ScrollToTop showUnder={100}>
          <BsChevronUp
            size="3rem"
            className="bg-dark rounded p-2 position-relative"
          />
        </ScrollToTop>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.isAuth,
  };
};

export default connect(mapStateToProps)(App);
