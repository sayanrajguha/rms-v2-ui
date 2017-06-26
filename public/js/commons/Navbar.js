/* import modules */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/* import components*/


/* create components */
var Navbar = React.createClass({
  render : function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="logo">
              <a href="#"><img src="images/logo2.png" alt="Logo" className="logoImg" /></a>
            </div>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="visible-xs visible-sm"><a href="index.html">Home</a></li>
              <li className="visible-xs visible-sm"><a href="sites.html">Sites</a></li>
              <li className="visible-xs visible-sm"><a href="tools.html">Tools</a></li>
              <li className="visible-xs visible-sm"><a href="users.html">Users</a></li>
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" id="nav-drop-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user" aria-hidden="true"></i> 
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#userRequestModal" data-toggle="modal" data-target="#userRequestModal">Requests <span className="badge notifyBadge">2</span><i className="fa fa-exclamation-triangle pull-right" aria-hidden="true"></i></a></li>
                    <li><a href="#profileModal" data-toggle="modal" data-target="#profileModal">Profile <i className="fa fa-user pull-right" aria-hidden="true"></i></a></li>
                    <li><a href="#">Help <i className="fa fa-question-circle-o pull-right" aria-hidden="true"></i></a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Logout <i className="fa fa-sign-out pull-right"></i></a></li>
                  </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
