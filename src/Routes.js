/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage}/>
    </Switch>
  );
}

export default Routes;
