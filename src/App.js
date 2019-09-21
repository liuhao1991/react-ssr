import React from 'react';
import { Switch, Route } from 'react-router';
import { Link  } from 'react-router-dom';

import routes from './routes';

const App = (props) => {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <Switch>
        {routes.map((route, index) => (
          <Route key={ index } {...route} />
        ))}
      </Switch>
    </div>
  )
};



export default App;