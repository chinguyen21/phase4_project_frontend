import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import {Typography, Button, AppBar, Toolbar, Tab } from '@material-ui/core';
import styling from './styling/Styling'
import './App.css';

import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Authorization from './authentication/Authorization';
import Unauthorization from './authentication/Unauthorization';


const App = () => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogout = () => {
    localStorage.clear();
    setUser({});
    setLoggedIn(false);
    <Redirect to="/" />
  }

  return (
    <div className={styling().root}>

      <Router>
        <AppBar position="static">
          <Toolbar style={{background: "#9feded"}}>
            <Typography variant="h6" className={styling().title} >
              <Button><Link to= "/" style={{ textDecoration: 'none', color: 'red'}}>Home</Link></Button>
            </Typography>
            <Button><Link to= "/login" style={{ textDecoration: 'none', color: 'red'}}>Log In</Link></Button>
            <Button><Link to= "/signup" style={{ textDecoration: 'none', color: 'red'}}>Sign Up</Link></Button>
            <Button onClick={handleLogout} style={{ color: 'red' }}>Log Out</Button>
          </Toolbar>

        </AppBar>

        <Switch>
          <Route exact path='/'>
            {loggedIn ? <Authorization /> : <Unauthorization/>}
          </Route>
          <Route exact path='/login'>
            {loggedIn ? <Redirect to="/" /> : <Login setUser={setUser} setLoggedIn={setLoggedIn}/>}
          </Route>
          <Route exact path='/signup'>
            {loggedIn ? <Redirect to="/" /> : <Signup setUser={setUser} setLoggedIn={setLoggedIn}/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


