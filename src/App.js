import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './views/Home';
import Results from './views/Results';
import Nav from './components/Nav';
import Head from './components/Head';
import Email from './components/Email';
import Tools from './components/Tools';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <Logo />
        <Head />
        <Router>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={Results} path="/results" />
          </Switch>
        </Router>
        <Email />
      </div>
      
    );
  }
}

export default App;
