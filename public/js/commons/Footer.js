/* import modules */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
/* import components*/

/* create components */
var Footer = React.createClass({
  render : function() {
    return (
      <div className="row">
        <footer className="footer">
          <div className="container">
            <p className="copyright">2016 &copy; sayanrajguha@gmail.com</p>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = Footer;
