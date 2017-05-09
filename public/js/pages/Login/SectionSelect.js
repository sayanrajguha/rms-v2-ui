/************************
Custom JS file
Author : Sayanraj Guha
fileName : SectionSelect.js
Description : JS file containing script for component SectionSelect
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
var SectionSelect = React.createClass({
  componentDidMount : function() {
    document.getElementById('loginBody').style.height = "100vh";
  },
  render : function() {
    return (
      <div id="loginBody">
        <div className="top-content">
            <div className="inner-bg">
                <div className="container box-container">
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
                        			<h4 className="login-h4 sysName">Resource Management System</h4>
                        		</div>
                        		<div className="form-top-right">
                        			<i className="fa fa-unlock"></i>
                        		</div>
                            </div>
                            <div className="form-bottom loginBox">
  			                      <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                <a className="sectionBtn login-a" role="button">HRMS</a>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                <Link to="dashboard/home" className="sectionBtn login-a" role="button">TPMS</Link>
                              </div>
		                        </div>
                        </div>
                    </div>
                    <div className="row logout-container">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                              <a className="btn btn-danger" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                    <div className="mastfoot">
                      <div className="inner">
                        <p> 
                          All rights reserved &copy; <a href="#" className="login-a">P. E. Erectors Pvt. Ltd.</a>
                        </p>
                        <p>
                          Design &copy; <a href="#" className="login-a">Sayanraj Guha | sayanrajguha@gmail.com</a>
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
module.exports = SectionSelect;
