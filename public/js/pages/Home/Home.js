/************************
Custom JS file
Author : Sayanraj Guha
fileName : Home.js
Description : JS file containing script for component Home
All rights reserved.
************************/
/* import modules */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

/* import components*/

/* create components */
var Home = React.createClass({
  componentDidMount : function() {
    document.body.style.paddingTop = '50px';
  },
  render : function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="index.html">Home <span className="sr-only">(current)</span></a></li>
                <li><a href="sites.html">Sites</a></li>
                <li><a href="tools.html">Tools</a></li>
                <li><a href="users.html">Users</a></li>
              </ul>
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Welcome to your Dashboard, <span id="userName">&lt;user_name&gt;</span> </h1>
              <div className="content">
                <div className="row placeholders">
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <a href="#" data-toggle="modal" data-target="#addSiteModal">
                      <span className="fa-stack iconStack" id="stackSite">
                        <i className="fa fa-circle fa-stack-2x" id="circleBgSite"></i>
                        <i className="fa fa-industry fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                    <span className="text-muted">
                      <p className="home-labels">
                        Add Site Record
                      </p>
                    </span>
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <a href="#" data-toggle="modal" data-target="#addToolModal">
                      <span className="fa-stack iconStack" id="stackTool">
                        <i className="fa fa-circle fa-stack-2x" id="circleBgTool"></i>
                        <i className="fa fa-wrench fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                    <span className="text-muted">
                      <p className="home-labels">
                        Add Tool Record
                      </p>
                    </span>
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <a href="transfer.html">
                      <span className="fa-stack iconStack" id="stackTransfer">
                        <i className="fa fa-circle fa-stack-2x" id="circleBgTransfer"></i>
                        <i className="fa fa-exchange fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                    <span className="text-muted">
                      <p className="home-labels">
                        View Transfer Summary
                      </p>
                    </span>
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <a href="#" data-toggle="modal" data-target="#dictionaryModal">
                      <span className="fa-stack iconStack" id="stackDictionary">
                        <i className="fa fa-circle fa-stack-2x" id="circleBgDictionary"></i>
                        <i className="fa fa-book fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                    <span className="text-muted">
                      <p className="home-labels">
                        Dictionary
                      </p>
                    </span>
                  </div>
                </div>
                
                <div className="row">
              		<div className="col-md-12">
              			<div className="panel-group" id="panel-797317">
              				<div className=""  id="upcAccordian">
                        <div className="panel panel-default">
                					<div className="panel-heading">
                						 <a className="panel-title" data-toggle="collapse" data-parent="#panel-797317" href="#panel-element-58940">
                						   Upcoming calibration dates
                						   <span className="badge notifyBadge">2</span>
                						   </a>
                					</div>
                					<div id="panel-element-58940" className="panel-collapse collapse">
                						<div className="panel-body">
                						  <div className="card-list visible-xs visible-sm hidden-md hidden-lg">
                                <a href="#">
                                  <div className="card card-inverse card-success">
                                    <div className="card-block">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">Tool Name 1</h4> 
                                          </div>
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">(ID) 1</h4>  
                                          </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">Site 1</p>
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">25.03.2017</p>  
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <a href="#">
                                  <div className="card card-inverse card-success">
                                    <div className="card-block">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">Tool Name 2</h4> 
                                          </div>
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">(ID) 2</h4>  
                                          </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">Site 2</p>
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">25.03.2017</p>  
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <a href="#">
                                  <div className="card card-inverse card-success">
                                    <div className="card-block">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">Tool Name 3</h4> 
                                          </div>
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">(ID) 3</h4>  
                                          </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">Site 3</p>
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">25.03.2017</p>  
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                						  </div>
                              <table className="table table-hover visible-lg visible-md hidden-sm hidden-xs">
                                <thead>
                                  <tr>
                                    <th className="skip-mobile">ID</th>
                                    <th>Tool Name</th>
                                    <th>Site</th>
                                    <th>Calibration Due Date</th>
                                    <th className="skip-mobile"><i className="fa fa-pencil"></i></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="skip-mobile">1</th>
                                    <td>Tool 1</td>
                                    <td>Site 1</td>
                                    <td>25.03.2017</td>
                                    <td className="skip-mobile">
                                      <span>
                                        <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="skip-mobile">2</th>
                                    <td>Tool 1</td>
                                    <td>Site 1</td>
                                    <td>25.03.2017</td>
                                    <td className="skip-mobile">
                                      <span>
                                        <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="skip-mobile">3</th>
                                    <td>Tool 1</td>
                                    <td>Site 1</td>
                                    <td>25.03.2017</td>
                                    <td className="skip-mobile">
                                      <span>
                                        <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                						</div>
                					</div>
                				</div>
              				</div>
              				<div className="" id="oodAccordian">
                        <div className="panel panel-default">
                					<div className="panel-heading">
                						 <a className="panel-title" data-toggle="collapse" data-parent="#panel-797317" href="#panel-element-137647">
                						   Out of date calibrations
                						   <span className="badge notifyBadge"></span>
                						   </a>
                					</div>
                					<div id="panel-element-137647" className="panel-collapse collapse">
                						<div className="panel-body">
                						  <div className="card-list visible-xs visible-sm hidden-md hidden-lg">
                                <a href="#">
                                  <div className="card card-inverse card-danger">
                                    <div className="card-block">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">Tool Name 1</h4> 
                                          </div>
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">(ID) 1</h4>  
                                          </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">Site 1</p>
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">25.03.2017</p>  
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <a href="#">
                                  <div className="card card-inverse card-danger">
                                    <div className="card-block">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">Tool Name 2</h4> 
                                          </div>
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">(ID) 2</h4>  
                                          </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">Site 2</p>
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">25.03.2017</p>  
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <a href="#">
                                  <div className="card card-inverse card-danger">
                                    <div className="card-block">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">Tool Name 3</h4> 
                                          </div>
                                          <div className="col-sm-6 col-xs-6">
                                            <h4 className="card-title">(ID) 3</h4>  
                                          </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">Site 3</p>
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                              <p className="card-text">25.03.2017</p>  
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                						  </div>
                              <table className="table table-hover visible-lg visible-md hidden-sm hidden-xs">
                                <thead>
                                  <tr>
                                    <th className="skip-mobile">ID</th>
                                    <th>Tool Name</th>
                                    <th>Site</th>
                                    <th>Calibration Due Date</th>
                                    <th className="skip-mobile"><i className="fa fa-pencil"></i></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="skip-mobile">1</th>
                                    <td>Tool 2</td>
                                    <td>Site 2</td>
                                    <td>01.03.2017</td>
                                    <td className="skip-mobile">
                                      <span>
                                        <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="skip-mobile">2</th>
                                    <td>Tool 2</td>
                                    <td>Site 2</td>
                                    <td>01.03.2017</td>
                                    <td className="skip-mobile">
                                      <span>
                                        <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="skip-mobile">3</th>
                                    <td>Tool 2</td>
                                    <td>Site 2</td>
                                    <td>01.03.2017</td>
                                    <td className="skip-mobile">
                                      <span>
                                        <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                						</div>
                					</div>
                				</div>
              				</div>
              			</div>
              		</div>
              	</div>
              	<hr />
                <h2 className="sub-header">Search</h2>
                <div className="row search-mobile">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <input type="text" name="name" value="" placeholder="Enter name..." className="form-control" />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <input type="text" name="desc" value="" placeholder="Enter description..." className="form-control" />
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="btn-group-mobile-center">
                      <div className="btn-group btn-group-mobile" role="group" aria-label="...">
                        <button type="button" className="btn btn-default active" id="btnSite">Site</button>
                        <button type="button" className="btn btn-default" id="btnTool">Tool</button>
                      </div>  
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-12 btn-group-mobile-center">
                    <button type="button" className="btn btn-default btn-search-mobile" name="btnSearch"><i className="fa fa-search" aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Home;
