import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Aman</h1>
          </Route>
          <Route exact path="/login">
            <Header />
            <h1>Login</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
