import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './routers/Main';
import Admin from './routers/Admin';
import { connect } from 'react-redux';
class App extends Component {

  render() {
    return (
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/admin' component={Admin} />
        </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  }
}

export default connect(mapStateToProps)(App);