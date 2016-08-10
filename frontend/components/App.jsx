"use strict";

const React = require('react');
const Link = require('react-router').Link;
const NavBar = require('./NavBar');



const App = React.createClass({

  componentDidMount(){
    $(document).foundation();
  },

  componentDidUpdate(){
  },

  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
