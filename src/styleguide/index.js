// @flow

// 3rd-party imports

import React from 'react';
import { Switch, type ContextRouter } from 'react-router-dom';

// local imports

import WrappingRoute from '~/shared/components/route';

// component

const Home = () => {
  return <div>Home</div>;
};

const Colors = () => {
  return <div>Colors</div>;
};

const Styleguide = (props: ContextRouter) => {
  const { path } = props.match;

  return (
    <div>
      Styleguide
      <Switch>
        <WrappingRoute exact path={`${path}/`} component={Home} />
        <WrappingRoute path={`${path}/colors`} component={Colors} />
      </Switch>
    </div>
  );
};

export default Styleguide;
