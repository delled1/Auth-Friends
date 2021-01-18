import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friendslist">Friends List</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/friendslist" component={FriendsList} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
