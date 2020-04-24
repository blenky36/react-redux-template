import React, { Fragment } from 'react';
import Home from './components/Home/Home';
import { Route, withRouter } from 'react-router-dom';

const Routes = () => (
    <Fragment>
        {/* Navbar open here */}
        <Route exact path='/' component={Home} />
        {/* Navbar close here */}
    </Fragment>
);

export default withRouter(Routes);