/* import modules */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/* import components*/


/* create components */
var SideBar = React.createClass({
  render : function() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 col-md-2 sidebar">
                  <ul className="nav nav-sidebar">
                    <li className="active homeLI"><Link to="dashboard/home" onClick={this.selectCurrent.bind(this,'home')}>Home</Link></li>
                    <li className="sitesLI"><Link to="dashboard/sites" onClick={this.selectCurrent.bind(this,'sites')}>Sites</Link></li>
                    <li className="toolsLI"><Link to="dashboard/tools" onClick={this.selectCurrent.bind(this,'tools')}>Tools</Link></li>
                    <li className="usersLI"><Link to="dashboard/users" onClick={this.selectCurrent.bind(this,'users')}>Users</Link></li>
                  </ul>
                </div>
            </div>
        </div>
            
    );
  },
  selectCurrent : function(identifier,item) {
    switch(identifier) {
      case 'home' : 
          $('.homeLI').hasClass('active') ? null : $('.homeLI').addClass('active') ;
          $('.sitesLI').hasClass('active') ? $('.sitesLI').removeClass('active') : null ;
          $('.toolsLI').hasClass('active') ? $('.toolsLI').removeClass('active') : null ;
          $('.usersLI').hasClass('active') ? $('.usersLI').removeClass('active') : null ;
          break;
      case 'sites' : 
          $('.homeLI').hasClass('active') ? $('.homeLI').removeClass('active') : null ;
          $('.sitesLI').hasClass('active') ? null : $('.sitesLI').addClass('active') ;
          $('.toolsLI').hasClass('active') ? $('.toolsLI').removeClass('active') : null ;
          $('.usersLI').hasClass('active') ? $('.usersLI').removeClass('active') : null ;
          break;
      case 'tools' : 
          $('.homeLI').hasClass('active') ? $('.homeLI').removeClass('active') : null ;
          $('.sitesLI').hasClass('active') ? $('.sitesLI').removeClass('active') : null ;
          $('.toolsLI').hasClass('active') ? null : $('.toolsLI').addClass('active') ;
          $('.usersLI').hasClass('active') ? $('.usersLI').removeClass('active') : null ;
          break;
      case 'users' : 
          $('.homeLI').hasClass('active') ? $('.homeLI').removeClass('active') : null ;
          $('.sitesLI').hasClass('active') ? $('.sitesLI').removeClass('active') : null ;
          $('.toolsLI').hasClass('active') ? $('.toolsLI').removeClass('active') : null ;
          $('.usersLI').hasClass('active') ? null : $('.usersLI').addClass('active') ;
          break;
      default : console.log('option not available')
          break;
    }
  }
});

module.exports = SideBar;
