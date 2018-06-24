// @flow

// 3rd-party imports

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// local imports

import App from '~/app/app.js';
import Styleguide from '~/styleguide';

// route

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/styleguide" component={Styleguide} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

// mount app

const mount = document.getElementById('root');

if (mount) {
  ReactDOM.render(<Root />, mount);
}
