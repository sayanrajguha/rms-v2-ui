/************************
Custom JS file
Author : Sayanraj Guha
fileName : main.js
Description : JS file containing the root script which integrates all the components
All rights reserved.
************************/
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Home = require('./pages/Home/Home');
var App = require('./commons/App');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
    </Route>
  </Router>
  ,
  document.getElementById('content')
);
