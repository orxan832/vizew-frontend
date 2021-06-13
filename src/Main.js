import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import Header from "./components/partials/Header";
import Index from "./containers/Index";
import Register from "./containers/Register";
import Login from "./containers/Login";
import ArticleReader from "./containers/ArticleReader";
import Footer from "./components/partials/Footer";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Fragment>
      <Header />
      {user && (
        <Fragment>
          <Redirect from="/login" to="/" />
          <Redirect from="/register" to="/" />
        </Fragment>
      )}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/single-article/:id" component={ArticleReader} />
        <Route path="/" component={Index} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Main;
