import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Home from '../views/home/Home.jsx';
import SignIn from '../views/signin/SignIn.jsx';
import SignUp from '../views/signup/SignUp.jsx';
import { PrivateRoute } from './helperRoutes';

/**
 * return private routes
 * [These routes have to have a valid token]
 * @param {any} props 
 * @returns 
 */
const PrivateRoutes = (props) => {
    return (
        <Switch>
            <PrivateRoute exact path="/home" component={Home} />
        </Switch>
    );
}

export default PrivateRoutes;