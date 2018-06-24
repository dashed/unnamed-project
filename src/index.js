// @flow

// 3rd-party imports

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

// local imports

import WrappingRoute from '~/shared/components/route';

import App from '~/app/app.js';
import Styleguide from '~/styleguide';

// root

const Root = () => {
  return (
    <Router>
      <Switch>
        <WrappingRoute path="/styleguide" component={Styleguide} />
        <WrappingRoute path="/" component={App} />
      </Switch>
    </Router>
  );
};

// mount app

const mount = document.getElementById('root');

if (mount) {
  ReactDOM.render(<Root />, mount);
}
