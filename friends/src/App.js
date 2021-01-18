import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import {PrivateRoute} from "./components/PrivateRoute"

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
        <PrivateRoute exact path="/friendslist">
          <FriendsList />
        </PrivateRoute>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
