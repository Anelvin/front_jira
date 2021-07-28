import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './views/signin/SignIn.jsx';
import SignUp from './views/signup/SignUp.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact><Redirect to="/signin" /></Route>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
