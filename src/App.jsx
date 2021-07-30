import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
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
