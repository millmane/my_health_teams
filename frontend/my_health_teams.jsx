"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/App');
const PostIndex = require('./components/PostIndex');
const BlogSideBar = require('./components/BlogSideBar');
const NavBar = require('./components/NavBar');
const Home = require('./components/Home');

// const Search = require('./components/search');
// const PostForm = require('./components/post_form');
// const PostShow = require('./components/post_show');
//Auth
// const SessionStore = require('./stores/session_store');
// const SessionActions = require('./actions/session_actions');

//Testing
// const PostStore = require('./stores/post_store');
// const PostApiUtil = require('./util/post_api_util');
// const PostActions = require('./actions/post_actions');
//
// window.PostStore = PostStore;
// window.PostApiUtil = PostApiUtil;
// window.PostActions = PostActions;


const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
    <IndexRoute component={ Home } />
      <Route path="/posts" component={ BlogSideBar } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {

  const root = document.getElementById('content');

  ReactDOM.render(appRouter, root);

});
