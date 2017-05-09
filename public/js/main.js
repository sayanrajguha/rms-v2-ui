/************************
Custom JS file
Author : Sayanraj Guha
fileName : main.js
Description : JS file containing the root script which integrates all the components
All rights reserved.
************************/
/* import modules */
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

/* import components*/
var Home = require('./pages/Home/Home');
var Login = require('./pages/Login/Login');
var SectionSelect = require('./pages/Login/SectionSelect');
var App = require('./commons/App');


/* create components */
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/sectionSelect" component={SectionSelect} />
    <Route path="dashboard" component={App} >
      <Route path="home" component={Home} />
    </Route>
  </Router>
  ,
  document.getElementById('content')
);
