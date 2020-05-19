/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
}

export default Routes;
