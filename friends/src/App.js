import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import {PrivateRoute} from "./components/PrivateRoute"
import AddFriend from "./components/AddFriend"

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  };

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
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
        <Link to="/addfriend">Add Friend</Link>
      </ul>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/friendslist">
          <FriendsList />
        </PrivateRoute>
        <Route path="/addfriend" component={AddFriend} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
