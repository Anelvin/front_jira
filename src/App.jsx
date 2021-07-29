import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './views/signin/SignIn.jsx';
import SignUp from './views/signup/SignUp.jsx';
import Home from './views/home/Home.jsx';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';

function App(props) {
  return (
    <React.StrictMode>
      <Router>
        <PublicRoutes />
        <PrivateRoutes props={props}/>
      </Router>
    </React.StrictMode>
  );
}

export default App;
