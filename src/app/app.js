// @flow

// 3rd-party imports

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// local imports

import Hello from './hello.mdx';

// components

const Home = () => {
  return <div>home</div>;
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
      </Switch>
    </div>
  );
};

export default App;
