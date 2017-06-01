import React from 'react';
import {render} from 'react-dom';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';


import Login from '../components/login/login';
import Logout from '../components/login/logout';
import Video from '../components/video';
import Main from '../components/main';


class RouteConfig extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/video" component={Video}/>
        </Route>
      </Router>
    )
  }
}

module.exports = RouteConfig;