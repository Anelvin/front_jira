import React from 'react';
import { Redirect, Route } from 'react-router';
import decode from 'jwt-decode';
import AppBar from '../components/AppBar';
import AppBarPublic from '../components/AppBarPublic';
import SubAppBarPublic from '../components/SubAppBarPublic';

/**
 * Create a private route
 * @param {component, options} param
 * @returns 
 */
 export const PrivateRoute = ({ component, ...options}) => {
    const isAuth = isAuthenticated();
    if(isAuth){
        return (
            <div>
                <AppBar />
                <Route {...options} component={component} />
            </div>
        )
    } 
    return <Redirect to="/signin" />
}

/**
 * Create a public route
 * @param {component, options} param
 * @returns 
 */
export const PublicRoute = ({ component, ...options}) => {
    const isAuth = isAuthenticated();
    if(!isAuth) {
        return (
            <div>
                <AppBarPublic />
                <SubAppBarPublic />
                <Route {...options} component={component} />
            </div>
        )
    } 
    return <Redirect to="/home" />
}

const isAuthenticated = () => {
    const data = JSON.parse(localStorage.getItem('user-jira'));
    if(data){
        const decoded = decode(data.token);
        if(decoded.exp > Date.now() / 1000) return true;
        return false;
    }
    return false;
}

export const getToken = () => {
    const data = JSON.parse(localStorage.getItem('user-jira'));
    let config = {
        headers: {
            authorization: 'Bearer ' + data.token
        }
    }
    return config;
}