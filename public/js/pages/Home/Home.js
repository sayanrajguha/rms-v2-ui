/************************
Custom JS file
Author : Sayanraj Guha
fileName : Home.js
Description : JS file containing script for component Home
All rights reserved.
************************/
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;


var Home = React.createClass({
  render : function() {
    return (
      <div>
        <Header />
        <div className="container">

        </div>
      </div>
    );
  }
});
module.exports = Home;
