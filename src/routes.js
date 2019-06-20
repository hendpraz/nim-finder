import React from 'react';
import {HashRouter as Router, Route,  Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Login from '././components/Login/Login';
import Register from '././components/Register/Register';
import Home from '././components/Home/Home';
import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
  <Router>
      <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Welcome}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </Router>
);

export default Routes;