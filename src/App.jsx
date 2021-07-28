import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import signIn from './views/signin/signIn.jsx';
import signUp from './views/signup/signUp.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact><Redirect to="/signin" /></Route>
        <Route path='/signin' component={signIn} />
        <Route path='/signup' component={signUp} />
      </Switch>
    </Router>
  );
}

export default App;
