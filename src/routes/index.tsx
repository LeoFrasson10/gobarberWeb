import React from 'react';
import { Switch } from 'react-router-dom';

import Router from './Route'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashoboard';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Router path="/" exact component={SignIn} />
    <Router path="/signup" component={SignUp} />
    <Router path="/forgot-password" component={ForgotPassword} />
    <Router path="/reset-password" component={ResetPassword} />

    <Router path="/profile" component={Profile} isPrivate />
    <Router path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
