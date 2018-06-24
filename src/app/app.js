// @flow

// 3rd-party imports

import React from 'react';
import { Switch } from 'react-router-dom';

// local imports

import WrappingRoute from '~/shared/components/route';
import Hello from './hello.mdx';

// components

const Home = () => {
  return <div>home</div>;
};

const App = () => {
  return (
    <div>
      <Switch>
        <WrappingRoute exact path="/" component={Home} />
        <WrappingRoute path="/hello" component={Hello} />
      </Switch>
    </div>
  );
};

export default App;
