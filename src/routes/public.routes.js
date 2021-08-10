import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../views/signin/SignIn.jsx';
import SignUp from '../views/signup/SignUp.jsx';
import { PublicRoute } from './helperRoutes';
import Public from '../views/public/Public';

const PublicRoutes = (props) => {
    return (
        <Switch>
            <PublicRoute exact path='/' component={Public}/>
            <PublicRoute exact path='/signin' component={SignIn} />
            <PublicRoute exact path='/signup' component={SignUp} />
        </Switch>
    );
}

export default PublicRoutes;