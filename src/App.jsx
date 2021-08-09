import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';
import AuthState from './context/Auth/AuthState';
import SideBarState from './context/SideBar/SideBarState';

function App(props) {
  return (
    <AuthState>
      <SideBarState>
      <Router>
        <PublicRoutes />
        <PrivateRoutes props={props}/>
      </Router>
      </SideBarState>
    </AuthState>
  );
}

export default App;
