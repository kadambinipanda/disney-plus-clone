import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Details from './components/Details';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
              <Login />
            </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
