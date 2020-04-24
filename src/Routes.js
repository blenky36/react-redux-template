import React, { Fragment } from 'react';
import Home from './components/Home/Home';
import { Route, withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Routes = () => (
    <Fragment>
        <Layout>
            <Route exact path='/' component={Home} />
        </Layout>
    </Fragment>
);

export default withRouter(Routes);