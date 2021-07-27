import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signIn from './views/signin/signIn.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={signIn} />
      </Switch>
    </Router>
  );
}

export default App;
