/* import modules */
var React = require('react');
var Navbar = require('./Navbar');
var Footer = require('./Footer');
/* import components*/

/* create components */
var App = React.createClass( {
  render : function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
});
module.exports = App;
