// @flow

// 3rd-party imports

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// component

const Home = () => {
  return <div>Home</div>;
};

const Colors = () => {
  return <div>Colors</div>;
};

const Styleguide = props => {
  const { path } = props.match;

  return (
    <div>
      Styleguide
      <Switch>
        <Route exact path={`${path}/`} component={Home} />
        <Route path={`${path}/colors`} component={Colors} />
      </Switch>
    </div>
  );
};

export default Styleguide;
