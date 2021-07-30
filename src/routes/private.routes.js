import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../views/home/Home.jsx';
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