import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/about' component={ About } />
        <Route path='/users' component={ Users } />
      </BrowserRouter>
    );
  }
}

export default App;