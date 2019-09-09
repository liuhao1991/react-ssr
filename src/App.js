import React from 'react';
import { Switch, Route } from 'react-router';
import {Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <Switch>
        <Route path="/" component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
      </Switch>
    </div>
  )
};



export default App;