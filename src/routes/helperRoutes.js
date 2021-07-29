import React from 'react';
import { Redirect, Route } from 'react-router';

/**
 * Create a private route
 * @param {component, options} param
 * @returns 
 */
 export const PrivateRoute = ({ component, ...options}) => {
    const isAuth = true;
    if(isAuth) return <Route {...options} component={component} />
    return <Redirect to="/signin" />
}

/**
 * Create a public route
 * @param {component, options} param
 * @returns 
 */
export const PublicRoute = ({ component, ...options}) => {
    const isAuth = false;
    if(!isAuth) return <Route {...options} component={component} />
    return <Redirect to="/home" />
}