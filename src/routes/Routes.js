import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Food from '../pages/Food';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Food } />
    </Switch>
  );
}

export default Routes;
