"use strict";

const React = require('react');
const Link = require('react-router').Link;

const NavBar = React.createClass({

  componentDidMount(){
  },

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">MyHealthTeams</li>
            <li><Link to="/" className="header-link">Home</Link></li>
            <li><Link to="/posts" className="header-link">Posts</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
