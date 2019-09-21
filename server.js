import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { matchPath } from "react-router-dom";
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';

import routes from './src/routes';
import App from './src/App';
// import Home from './src/pages/Home';
// import About from './src/pages/About';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static('build/static'));

const loadBranchData = (location) => {
  console.log(location);
  const branch = matchRoutes(routes, location.pathname);

  const promises = branch.map(({ route, match }) => {
    console.log(match);
    return route.loadData
      ? route.loadData(match)
      : Promise.resolve(null)
  });

  return Promise.all(promises);
}

// tell the app to use the above rules
app.get('*', (req, res) => {
  const context = {};
  // inside a request
  const promises = [];
  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  routes.some(route => {
    // use `matchPath` here
    const match = matchPath(req.path, route);
    if (match) promises.push(route.loadData(match));
    return match;
  });

  if (promises.length) {
    Promise.all(promises).then(data => {
      console.log(data);
    });
  }
 
  // console.log(Component);
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={ req.url } context={ context } >
      <App data={ { name: 'liuhao' } } />
    </StaticRouter>
  );

  const html = `
    <!doctype html>
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.__INIT_DATA__ = ${serialize({name: req.path})}</script>
        <script src="js/client_bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
