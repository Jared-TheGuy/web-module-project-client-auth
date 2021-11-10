import React from 'react';
import axios from "axios";
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import AuthenticationCheck from './components/AuthenticationCheck';


const testUser = {
  username: 'Jared',
  password: 'Bates'
}

const newFriend = {
  id: 1,
  name: 'Tester',
  age: 32,
  email: 'foooook'
}

axios.post('http://localhost:5000/api/login', testUser)
.then(resp => {
  localStorage.setItem("token", resp.data.payload)
})
.catch(err => {
  console.log(err)
})

const token = localStorage.getItem('token')

axios.get('http://localhost:5000/api/friends', {headers: { authorization: token }})
.then(resp => {
  console.log(resp.data)
})
.catch(err => {
  console.log(err)
})

function App() {
  
  

  return (
    <div>
      <Link to="login">Login</Link>
      <Link to="/logout">logout</Link>
      <div className="App">
        <h2>Client Auth Project</h2>
      </div>
      <Switch>
        <AuthenticationCheck exact path="/test"/>
        <Route path={'/login'}>
          <Login/>
        </Route>
        <Route path={'/logout'}>
          <Logout/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
