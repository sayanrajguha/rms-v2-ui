/************************
Custom JS file
Author : Sayanraj Guha
fileName : Login.js
Description : JS file containing script for component Login
All rights reserved.
************************/
/* import components*/
var React = require('react');
var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
// var browserHistory = ReactRouter.hashHistory;

/* import components*/


/* create components */
var Login = React.createClass({
  render : function() {
    return (
      <div id="loginBody">
        <div className="top-content">
            <div className="inner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <div className="inner">
                              <img src="images/logo2.png" alt="Logo" className="logoImgLogin'img-responsive login-img" />
                          </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 form-box">
                        	<div className="form-top">
                        		<div className="form-top-left">
                        			<h4 className="sysName">Resource Management System</h4>
                        		</div>
                        		<div className="form-top-right">
                        			<i className="fa fa-lock"></i>
                        		</div>
                            </div>
                            <div className="form-bottom loginBox">
  			                    <form role="form" action="" method="post" className="login-form">
  			                    	<div className="form-group">
                                <input id="userid" className="form-control" type="text" autocomplete="off" placeholder="User ID" name="userid" />
                                <div className="input-group">
                                  <input id="password" type="password" className="form-control" placeholder="Password" />
                                  <span className="input-group-btn">
                                    <button className="btn btn-default" role="button" type="button" id="btnShowPass"><i className="fa fa-eye"></i></button>
                                  </span>
                                </div> 
                              </div>
                              <div className="form-group">
                                <select className="form-control securityLoginDD">
                                  <option className="securityLoginDDItem">Select Security/Role</option>
                                  <option className="securityLoginDDItem">Admin</option>
                                  <option className="securityLoginDDItem">Moderator</option>
                                  <option className="securityLoginDDItem">Employee</option>
                                </select>
                              </div>
  			                     <Link to="sectionSelect" className="btn btn-success">Sign in!</Link>
  			                    </form>
		                    </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <div className="col-sm-6 col-md-6 col-xs-12 col-lg-6 text-center">
                              <a className="login-a" href="#resetPasswordModal" data-toggle="modal" data-target="#resetPasswordModal">Forgot Password?</a>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xs-12 col-lg-6 text-center">
                              <a className="login-a" href="#">Back to Main Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="mastfoot">
                      <div className="inner">
                        <p> 
                          All rights reserved &copy; <a className="login-a" href="#">P. E. Erectors Pvt. Ltd.</a>
                        </p>
                        <p>
                          Design &copy; <a className="login-a" href="#">Sayanraj Guha | sayanrajguha@gmail.com</a>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
});
module.exports = Login;
