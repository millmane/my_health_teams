"use strict";

const React = require('react');
const PostStore = require('../stores/post_store');
const PostActions = require('../actions/post_actions');
const BlogSideBar = require('./BlogSideBar');
// const IndexItem = require('./index_item');

const PostIndex = React.createClass({

  getInitialState(){
    return {
      posts: PostStore.all()
    };
  },

  componentDidMount(){
    this.postListener = PostStore.addListener(this._handleChange);
    PostActions.fetchAllPosts();
  },

  _handleChange(){
    // PostActions.fetchAllPosts()
    this.setState({ posts: PostStore.all() })
  },

  componentWillUnmount() {
    this.postListener.remove();
  },

  render() {
    const posts = this.state.posts;
    console.log(posts);
    const postKeys = Object.keys(posts);
    console.log(postKeys)
    return (

      <section className="hero">
        <h1>Post: </h1>
        {
          postKeys.map( key => {
            return(<div>{posts[key].content}</div>);
          })
        }
      </section>
    );
  }
});

module.exports = PostIndex;
