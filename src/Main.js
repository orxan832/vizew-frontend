import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import Header from "./components/partials/Header";
import Index from "./containers/Index";
import Register from "./containers/Register";
import Login from "./containers/Login";
import User from "./containers/User";
import ArticleReader from "./containers/ArticleReader";
import Footer from "./components/partials/Footer";
import { useDispatch } from "react-redux";
import { setState } from "./redux/actions/common";
import axios from './helper/axios';
import Search from "./containers/Search";
import About from "./containers/About";
import ForgotPassword from "./containers/ForgotPassword";
import Offer from "./containers/Offer";

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/tag/data`);
      dispatch(setState('tags', res.data));
    }

    getData();
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/user" component={User} />
        <Route path="/single-article/:articleId/:authorId/" component={ArticleReader} />
        <Route path="/search/:searchString?" component={Search} />
        <Route path="/religion" component={About} />
        <Route path="/ayah" component={About} />
        <Route path="/hadith" component={About} />
        <Route path="/link" component={About} />
        <Route path="/offer" component={Offer} />
        <Route path="/" component={Index} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Main;