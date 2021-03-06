// @flow

// 3rd-party imports

import * as React from 'react';
import { Route, type ContextRouter } from 'react-router-dom';

// component

// Source: https://reacttraining.com/react-router/core/api/Route/component
// When you use component (instead of render or children, below) the router uses React.createElement
// to create a new React element from the given component. That means if you provide an inline function
// to the component prop, you would create a new component every render. This results in the existing
// component unmounting and the new component mounting instead of just updating the existing component.

type Props = {
  component: React.ComponentType<ContextRouter>
};

const WrappingRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
};
export default WrappingRoute;
