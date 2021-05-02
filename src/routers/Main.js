import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Index from "../containers/Index";
import Register from "../containers/Register";
import ArticleReader from "../containers/ArticleReader";
import Login from "../containers/Login";
import { setAuthToken } from "../helper/functions";
import { connect } from "react-redux";

import { Fragment } from "react";

class Main extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    token && setAuthToken(token);
  }

  render() {
    const { isAuth } = this.props;
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/index" component={Index} />
          <Route path="/login" component={isAuth ? Index : Login} />
          <Route path="/register" component={isAuth ? Index : Register} />
          <Route path="/single-article/:id" component={ArticleReader} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.isAuth,
  };
};

export default connect(mapStateToProps)(Main);
