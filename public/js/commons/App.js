/* import modules */
var React = require('react');
var Navbar = require('./Navbar');
var SideBar = require('./Sidebar');
var Footer = require('./Footer');
/* import components*/

/* create components */
var App = React.createClass( {
  render : function() {
    return (
      <div>
        <Navbar />
        <SideBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
});
module.exports = App;
