/************************
Custom JS file
Author : Sayanraj Guha
fileName : UsersBoard.js
Description : JS file containing script for component UsersBoard
All rights reserved.
************************/
/* import modules */
var React = require('react');

/* import components*/

/* create components */
var UsersBoard = React.createClass({
  componentDidMount : function() {
    document.body.style.paddingTop = '50px';
  },
  render : function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Users</h1>
              <div className="content">
                <div className="row crudIcons crud">
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 placeholder-secondary">
                    <a href="#addUserModal" data-toggle="modal" data-target="#addUserModal">
                      <span className="fa-stack stackAdd" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudAdd"></i>
                        <i className="fa fa-plus fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 placeholder-secondary">
                    <a href="javascript:void(0)" className="remove">
                      <span className="fa-stack stackRemove" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i className="fa fa-remove fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 placeholder-secondary">
                    <a href="javascript:void(0)">
                      <span className="fa-stack stackFilter" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudFilter"></i>
                        <i className="fa fa-filter fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="row crudIcons saveCancel">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 placeholder-secondary">
                    <a href="javascript:void(0)" className="confirmRemove">
                      <span className="fa-stack stackRemoveConfirm" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i className="fa fa-check fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 placeholder-secondary">
                    <a href="javascript:void(0)" className="confirmRemove">
                      <span className="fa-stack stackRemoveCancel" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i className="fa fa-times-circle fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="row filterRow hidden">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <select className="form-control btn-default">
                      <option>Select Security</option>
                      <option>Admin</option>
                      <option>Moderator</option>
                      <option>Employee</option>
                    </select>
                  </div>
                </div>
    			<div className="card-list visible-xs visible-sm hidden-md hidden-lg">
                  <a href="#">
                    <div className="card card-inverse card-success">
                      <div className="card-block">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">Mark</h4> 
                            </div>
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">Otto</h4>  
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">@mdo</p>
                              </div>
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">admin</p>  
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
                              <h4 className="card-title">Jacob</h4> 
                            </div>
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">Thornton</h4>  
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">@fat</p>
                              </div>
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">moderator</p>  
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
    			</div>
                <div className="table-responsive table table-hover visible-lg visible-md hidden-sm hidden-xs">
                  <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Security</th>
                      <th className="detailsCell">
                          <i className="fa fa-pencil"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <span className="slNo">1</span>
                        <div className="deleteColumn">
                          <input type="checkbox" name="userid" value="user1"/>
                        </div>
                      </th>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>admin</td>
                      <td className="detailsCell">
                        <span>
                            <a href="javascript:void(0)"><i className="fa fa-edit"></i></a>
                            <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                          </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="slNo">2</span>
                        <div className="deleteColumn">
                          <input type="checkbox" name="userid" value="user2"/>
                        </div>
                      </th>
                      <td>@fat</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>moderator</td>
                      <td className="detailsCell">
                        <span>
                            <a href="javascript:void(0)"><i className="fa fa-edit"></i></a>
                            <a href="javascript:void(0)"><i className="fa fa-eye"></i></a>
                          </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="slNo">3</span>
                        <div className="deleteColumn">
                          <input type="checkbox" name="userid" value="user3"/>
                        </div>
                      </th>
                      <td>@twitter</td>
                      <td>Larry</td>
                      <td>The Bird</td>
                      <td>employee</td>
                      <td className="detailsCell">
                        <span>
                            <a href="javascript:void(0)"><i className="fa fa-edit"></i></a>
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
    );
  }
});
module.exports = UsersBoard;
