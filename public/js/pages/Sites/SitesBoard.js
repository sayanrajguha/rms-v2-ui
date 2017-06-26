/************************
Custom JS file
Author : Sayanraj Guha
fileName : SitesBoard.js
Description : JS file containing script for component SitesBoard
All rights reserved.
************************/
/* import modules */
var React = require('react');

/* import components*/

/* create components */
var SitesBoard = React.createClass({
  componentDidMount : function() {
    document.body.style.paddingTop = '50px';
  },
  render : function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Sites</h1>
              <div className="content">
                <div className="row crudIcons crud">
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 placeholder-secondary">
                    <a href="javascript:void(0)">
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
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <select className="form-control btn-success">
                      <option>Select Status</option>
                      <option>Status 1</option>
                      <option>Status 2</option>
                      <option>Status 3</option>
                    </select>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <select className="form-control btn-danger">
                      <option>Select Type</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                    </select>
                  </div>
                </div>
    		    <div className="card-list visible-xs visible-sm hidden-md hidden-lg">
                  <a href="#">
                    <div className="card card-inverse card-primary">
                      <div className="card-block">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">Site Name 1</h4>  
                            </div>
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">[ID] Site ID 1</h4>  
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Status 1</p> 
                              </div>
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Type 1</p>  
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Address 1</p>
                              </div>
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Contact Person 1</p>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="card card-inverse card-primary">
                      <div className="card-block">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">Site Name 2</h4>  
                            </div>
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">[ID] Site ID 2</h4>  
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Status 2</p> 
                              </div>
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Type 2</p>  
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Address 2</p>
                              </div>
                              <div className="col-sm-6 col-xs-6">
                                <p className="card-text">Contact Person 2</p>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
    		    </div>
                <div className="table-responsive visible-lg visible-md hidden-sm hidden-xs">
                  <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Site Name</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th>Type</th>
                      <th>Contact Person</th>
                      <th className="detailsCell"><i className="fa fa-pencil"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <span className="slNo">1</span>
                        <div className="deleteColumn">
                          <input type="checkbox" name="id" value="item1"/>
                        </div>
                      </th>
                      <td>Demo Name 1</td>
                      <td>Demo Address 1</td>
                      <td>RUNNING</td>
                      <td>ERECTION</td>
                      <td>Jane Doe</td>
                      <td className="detailsCell">
                        <span>
                          <a href="javascript:void(0)"><i className="fa fa-edit"></i></a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="slNo">2</span>
                      <div className="deleteColumn">
                        <input type="checkbox" name="id" value="item1"/>
                      </div>
                      </th>
                      <td>Demo Name 2</td>
                      <td>Demo Address 2</td>
                      <td>RUNNING</td>
                      <td>STORE</td>
                      <td>Mary Jane</td>
                      <td className="detailsCell">
                        <span>
                          <a href="javascript:void(0)"><i className="fa fa-edit"></i></a>
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
module.exports = SitesBoard;
