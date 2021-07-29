import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './views/signin/SignIn.jsx';
import SignUp from './views/signup/SignUp.jsx';
import Home from './views/home/Home.jsx';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path='/' exact><Redirect to="/signin" /></Route>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
