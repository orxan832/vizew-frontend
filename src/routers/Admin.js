import React, { Component } from 'react';
import AdminPage from '../containers/Admin';
import { Switch, Route } from 'react-router-dom';
import User from '../containers/User';

class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/admin' component={AdminPage} />
                <Route path='/admin/user' component={User} />
            </Switch>
        )
    }
}

export default Admin; 