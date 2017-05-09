/************************
Custom JS file
Author : Sayanraj Guha
fileName : SiteBoard.js
Description : JS file containing script for component SiteBoard
All rights reserved.
************************/
/* import modules */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

/* import components*/

/* create components */
var SiteBoard = React.createClass({
  componentDidMount : function() {
    document.body.style.paddingTop = '50px';
  },
  render : function() {
    return (
      <div>
        <div className="container-fluid">
          <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
              <ul class="nav nav-sidebar">
                <li><a href="javascript:void(0)">Home <span class="sr-only">(current)</span></a></li>
                <li class="active"><a href="javascript:void(0)">Sites</a></li>
                <li><a href="javascript:void(0)">Tools</a></li>
                <li><a href="javascript:void(0)">Users</a></li>
              </ul>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 class="page-header">Sites</h1>
              <div class="content">
                <div class="row crudIcons crud">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 placeholder-secondary">
                    <a href="javascript:void(0)">
                      <span class="fa-stack stackAdd" id="">
                        <i class="fa fa-circle fa-stack-2x linkCrudAdd"></i>
                        <i class="fa fa-plus fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 placeholder-secondary">
                    <a href="javascript:void(0)" class="remove">
                      <span class="fa-stack stackRemove" id="">
                        <i class="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i class="fa fa-remove fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 placeholder-secondary">
                    <a href="javascript:void(0)">
                      <span class="fa-stack stackFilter" id="">
                        <i class="fa fa-circle fa-stack-2x linkCrudFilter"></i>
                        <i class="fa fa-filter fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="row crudIcons saveCancel">
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 placeholder-secondary">
                    <a href="javascript:void(0)" class="confirmRemove">
                      <span class="fa-stack stackRemoveConfirm" id="">
                        <i class="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i class="fa fa-check fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 placeholder-secondary">
                    <a href="javascript:void(0)" class="confirmRemove">
                      <span class="fa-stack stackRemoveCancel" id="">
                        <i class="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i class="fa fa-times-circle fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                </div>
                
                <div class="row filterRow hidden">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <select class="form-control btn-success">
                      <option>Select Status</option>
                      <option>Status 1</option>
                      <option>Status 2</option>
                      <option>Status 3</option>
                    </select>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <select class="form-control btn-danger">
                      <option>Select Type</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                    </select>
                  </div>
                </div>
    		    <div class="card-list visible-xs visible-sm hidden-md hidden-lg">
                  <a href="#">
                    <div class="card card-inverse card-primary">
                      <div class="card-block">
                        <div class="container">
                          <div class="row">
                            <div class="col-sm-6 col-xs-6">
                              <h4 class="card-title">Site Name 1</h4>  
                            </div>
                            <div class="col-sm-6 col-xs-6">
                              <h4 class="card-title">[ID] Site ID 1</h4>  
                            </div>
                          </div>
                          <div class="row">
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Status 1</p> 
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Type 1</p>  
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Address 1</p>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Contact Person 1</p>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div class="card card-inverse card-primary">
                      <div class="card-block">
                        <div class="container">
                          <div class="row">
                            <div class="col-sm-6 col-xs-6">
                              <h4 class="card-title">Site Name 2</h4>  
                            </div>
                            <div class="col-sm-6 col-xs-6">
                              <h4 class="card-title">[ID] Site ID 2</h4>  
                            </div>
                          </div>
                          <div class="row">
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Status 2</p> 
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Type 2</p>  
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Address 2</p>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                <p class="card-text">Contact Person 2</p>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
    		    </div>
                <div class="table-responsive visible-lg visible-md hidden-sm hidden-xs">
                  <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Site Name</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th>Type</th>
                      <th>Contact Person</th>
                      <th class="detailsCell"><i class="fa fa-pencil"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <span class="slNo">1</span>
                        <div class="deleteColumn">
                          <input type="checkbox" name="id" value="item1"/>
                        </div>
                      </th>
                      <td>Demo Name 1</td>
                      <td>Demo Address 1</td>
                      <td>RUNNING</td>
                      <td>ERECTION</td>
                      <td>Jane Doe</td>
                      <td class="detailsCell">
                        <span>
                          <a href="javascript:void(0)"><i class="fa fa-edit"></i></a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span class="slNo">2</span>
                      <div class="deleteColumn">
                        <input type="checkbox" name="id" value="item1"/>
                      </div>
                      </th>
                      <td>Demo Name 2</td>
                      <td>Demo Address 2</td>
                      <td>RUNNING</td>
                      <td>STORE</td>
                      <td>Mary Jane</td>
                      <td class="detailsCell">
                        <span>
                          <a href="javascript:void(0)"><i class="fa fa-edit"></i></a>
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
    );
  }
});
module.exports = SiteBoard;
