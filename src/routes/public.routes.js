import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../views/signin/SignIn.jsx';
import SignUp from '../views/signup/SignUp.jsx';
import { PublicRoute } from './helperRoutes';

const PublicRoutes = (props) => {
    return (
        <Switch>
            <PublicRoute exact path='/signin' component={SignIn} />
            <PublicRoute exact path='/signup' component={SignUp} />
        </Switch>
    );
}

export default PublicRoutes;