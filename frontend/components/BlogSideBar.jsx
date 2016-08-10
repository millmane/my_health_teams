"use strict";

const React = require('react');
const Link = require('react-router').Link;

const PostStore = require('../stores/post_store');
const PostActions = require('../actions/post_actions');

const Blog = require('./Blog');
const BlogCallout = require('./BlogCallout');
const BlogNav = require('./BlogNav');

const BlogSideBar = React.createClass({

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

    return (
      <div>
        <BlogCallout/>
        <Blog posts={this.state.posts}/>
        <BlogNav/>
      </div>
    );
  }
});

module.exports = BlogSideBar;
//
// <div className="callout large primary">
//   <div className="row column text-center">
//     <h1>Our Blog</h1>
//   </div>
// </div>
//
// <div className="row" id="content">
//   <div className="medium-8 columns">
//     <div className="blog-post">
//       <h3>Awesome blog post title <small>3/6/2015</small></h3>
//       <img className="thumbnail" src="http://placehold.it/850x350"/>
//       <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
//       <div className="callout">
//         <ul className="menu simple">
//           <li><a href="#">Author: Mike Mikers</a></li>
//           <li><a href="#">Comments: 3</a></li>
//         </ul>
//       </div>
//     </div>
//
//     <div className="blog-post">
//       <h3>Awesome blog post title <small>3/6/2015</small></h3>
//       <img className="thumbnail" src="http://placehold.it/850x350"/>
//       <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
//       <div className="callout">
//         <ul className="menu simple">
//           <li><a href="#">Author: Mike Mikers</a></li>
//           <li><a href="#">Comments: 3</a></li>
//         </ul>
//       </div>
//     </div>
//
//     <div className="blog-post">
//       <h3>Awesome blog post title <small>3/6/2015</small></h3>
//       <img className="thumbnail" src="http://placehold.it/850x350"/>
//       <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
//       <div className="callout">
//         <ul className="menu simple">
//           <li><a href="#">Author: Mike Mikers</a></li>
//           <li><a href="#">Comments: 3</a></li>
//         </ul>
//       </div>
//     </div>
//
//     <div className="blog-post">
//       <h3>Awesome blog post title <small>3/6/2015</small></h3>
//       <img className="thumbnail" src="http://placehold.it/850x350"/>
//       <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
//       <div className="callout">
//         <ul className="menu simple">
//           <li><a href="#">Author: Mike Mikers</a></li>
//           <li><a href="#">Comments: 3</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>
//   <div className="medium-3 columns" data-sticky-container>
//     <div className="sticky" data-sticky data-anchor="content">
//       <h4>Categories</h4>
//       <ul>
//         <li><a href="#">Skyler</a></li>
//         <li><a href="#">Jesse</a></li>
//         <li><a href="#">Mike</a></li>
//         <li><a href="#">Holly</a></li>
//       </ul>
//
//       <h4>Authors</h4>
//       <ul>
//         <li><a href="#">Skyler</a></li>
//         <li><a href="#">Jesse</a></li>
//         <li><a href="#">Mike</a></li>
//         <li><a href="#">Holly</a></li>
//       </ul>
//     </div>
//   </div>
// </div>
//
// <div className="row column">
//   <ul className="pagination" role="navigation" aria-label="Pagination">
//     <li className="disabled">Previous</li>
//     <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
//     <li><a href="#" aria-label="Page 2">2</a></li>
//     <li><a href="#" aria-label="Page 3">3</a></li>
//     <li><a href="#" aria-label="Page 4">4</a></li>
//     <li className="ellipsis"></li>
//     <li><a href="#" aria-label="Page 12">12</a></li>
//     <li><a href="#" aria-label="Page 13">13</a></li>
//     <li><a href="#" aria-label="Next page">Next</a></li>
//   </ul>
// </div>
