"use strict";

const React = require('react');
const Link = require('react-router').Link;

const BlogNav = React.createClass({

  render() {
    return (
      <div>
        <div className="row column">
          <ul className="pagination" role="navigation" aria-label="Pagination">
            <li className="disabled">Previous</li>
            <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
            <li><a href="#" aria-label="Page 2">2</a></li>
            <li><a href="#" aria-label="Page 3">3</a></li>
            <li><a href="#" aria-label="Page 4">4</a></li>
            <li className="ellipsis"></li>
            <li><a href="#" aria-label="Page 12">12</a></li>
            <li><a href="#" aria-label="Page 13">13</a></li>
            <li><a href="#" aria-label="Next page">Next</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = BlogNav;
