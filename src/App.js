import React from 'react';
import { connect } from 'react-redux';
import { getIsUserLoggedIn } from './_selectors/userSelectors';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Routes from './routes';

const App = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <Switch>
                <Redirect from="/login" to="/" />
                <Route component={Routes} />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route path="/login" component={Login} />
            </Switch>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: getIsUserLoggedIn(state)
});

export default withRouter(connect(mapStateToProps)(App));
