import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';
import AuthState from './context/Auth/AuthState';

function App(props) {
  return (
    <AuthState>
      <Router>
        <PublicRoutes />
        <PrivateRoutes props={props}/>
      </Router>
    </AuthState>
  );
}

export default App;
