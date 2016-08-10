"use strict";

const React = require('react');
const Link = require('react-router').Link;

const BlogCallout = React.createClass({

  render() {
    return (
      <div>
        <div className="callout large primary">
          <div className="row column text-center">
            <h1>Activity Feed</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BlogCallout;
