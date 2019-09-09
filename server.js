import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';

import App from './src/App';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static('build/public'));

// tell the app to use the above rules
app.get('*', (req, res) => {
  console.log(req.path);
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={ req.url } context={ context }>
      <App />
    </StaticRouter>
  );

  const html = `
    <!doctype html>
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.__INIT_DATA__ = ${serialize({name: 'LIUHAO'})}</script>
        <script src="client_bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
