/************************
Custom JS file
Author : Sayanraj Guha
fileName : ToolsBoard.js
Description : JS file containing script for component ToolsBoard
All rights reserved.
************************/
/* import modules */
var React = require('react');

/* import components*/

/* create components */
var ToolsBoard = React.createClass({
  componentDidMount : function() {
    document.body.style.paddingTop = '50px';
  },
  render : function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Tools</h1>
              <div className="content">
                <div className="row crudIcons crud">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 placeholder-secondary">
                    <a href="javascript:void(0)">
                      <span className="fa-stack stackAdd" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudAdd"></i>
                        <i className="fa fa-plus fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 placeholder-secondary">
                    <a href="javascript:void(0)" className="remove">
                      <span className="fa-stack stackRemove" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i className="fa fa-remove fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 placeholder-secondary">
                    <a href="javascript:void(0)">
                      <span className="fa-stack stackFilter" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudFilter"></i>
                        <i className="fa fa-filter fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="row crudIcons saveCancel">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 placeholder-secondary">
                    <a href="javascript:void(0)" className="confirmRemove">
                      <span className="fa-stack stackRemoveConfirm" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i className="fa fa-check fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 placeholder-secondary">
                    <a href="javascript:void(0)" className="confirmRemove">
                      <span className="fa-stack stackRemoveCancel" id="">
                        <i className="fa fa-circle fa-stack-2x linkCrudRemove"></i>
                        <i className="fa fa-times-circle fa-stack-1x thumbIcon"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="row filterRow hidden">
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <select className="form-control btn-success">
                      <option>Select Status</option>
                      <option>Status 1</option>
                      <option>Status 2</option>
                      <option>Status 3</option>
                    </select>
                  </div>
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <select className="form-control btn-danger">
                      <option>Select Site</option>
                      <option>Site 1</option>
                      <option>Site 2</option>
                      <option>Site 3</option>
                    </select>
                  </div>
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <select className="form-control btn-primary">
                      <option>Select Category</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                  </div>
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <select className="form-control btn-warning">
                      <option>Select Group</option>
                      <option>Group 1</option>
                      <option>Group 2</option>
                      <option>Group 3</option>
                    </select>
                  </div>
                </div>
    		    <div className="card-list visible-xs visible-sm hidden-md hidden-lg">
                  <a href="#">
                    <div className="card card-default">
                      <div className="card-block">
                        <div className="container">
                          <div className="row text-center">
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">Tool 1</h4>  
                            </div>
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">14</h4>  
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-4 col-xs-4">
                                <p className="card-sub card-text">[ID] Demo 1</p> 
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="card-sub card-text">[Q] 1</p>  
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="card-sub card-text">[Site] Site 1</p>  
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-4 col-xs-4">
                                <p className="label label-default">Good Condition</p> 
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="label label-default">Hand Tools</p>  
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="label label-default">General Tools</p>  
                              </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="card card-default">
                      <div className="card-block">
                        <div className="container">
                          <div className="row text-center">
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">Tool 2</h4>  
                            </div>
                            <div className="col-sm-6 col-xs-6">
                              <h4 className="card-title">5 TON</h4>  
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-4 col-xs-4">
                                <p className="card-sub card-text">[ID] Demo 2</p> 
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="card-sub card-text">[Q] 1</p>  
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="card-sub card-text">[Site] Site 2</p>  
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-sm-4 col-xs-4">
                                <p className="label label-default">Repairable</p> 
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="label label-default">Lifting Tools</p>  
                              </div>
                              <div className="col-sm-4 col-xs-4">
                                <p className="label label-default">Capital Tools</p>  
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
    		    </div>
                <div className="table-responsive visible-lg visible-md hidden-sm hidden-xs">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Tool ID</th>
                        <th>Name</th>
                        <th>Range/Size</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Group</th>
                        <th>Site</th>
                        <th>Quantity</th>
                        <th>Comment</th>
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
                            <input type="checkbox" name="id" value="item1"/>
                          </div>
                        </th>
                        <td>Demo 1</td>
                        <td>Tool 1</td>
                        <td>14</td>
                        <td>Good Condition</td>
                        <td>Hand Tools</td>
                        <td>General Tools</td>
                        <td>Demo Site 1</td>
                        <td>1</td>
                        <td></td>
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
                            <input type="checkbox" name="id" value="item1"/>
                          </div>
                        </th>
                        <td>Demo 2</td>
                        <td>Demo Tool 2</td>
                        <td>5 TON</td>
                        <td>Repairable</td>
                        <td>Lifting Tools</td>
                        <td>Capital Tools</td>
                        <td>HEAD OFFICE</td>
                        <td>1</td>
                        <td>Gone for Repair</td>
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
module.exports = ToolsBoard;
