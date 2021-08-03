import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';

function App(props) {
  return (
    <Router>
      <PublicRoutes />
      <PrivateRoutes props={props}/>
    </Router>
  );
}

export default App;
