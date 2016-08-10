"use strict";

const React = require('react');
const Link = require('react-router').Link;

const Blog = React.createClass({

  componentDidMount(){
  },

  render() {

    const posts = this.props.posts;
    const postKeys = Object.keys(posts);

    return (
      <div className="row" id="blogs">
        <div className="medium-8 columns">
          {
            postKeys.map( key => {
              return(
                <div className="blog-post">
                  <h3>{posts[key].content} - <small><small>{ new Date(posts[key].created_at).toString() }</small></small> </h3> 
                  <img className="thumbnail" src="http://placehold.it/850x350"/>
                  <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
                  <div className="callout">
                    <ul className="menu simple">
                      <li><a href="#">Author: Mike Mikers</a></li>
                      <li><a href="#">Comments: 3</a></li>
                    </ul>
                  </div>
                </div>
              );
            })
          }
        </div>

        <div className="medium-3 columns" data-sticky-container>
          <div className="sticky" data-sticky data-anchor="blogs">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Skyler</a></li>
              <li><a href="#">Jesse</a></li>
              <li><a href="#">Mike</a></li>
              <li><a href="#">Holly</a></li>
            </ul>

            <h4>Authors</h4>
            <ul>
              <li><a href="#">Skyler</a></li>
              <li><a href="#">Jesse</a></li>
              <li><a href="#">Mike</a></li>
              <li><a href="#">Holly</a></li>
            </ul>
          </div>
        </div>
    </div>
    );
  }
});

module.exports = Blog;

      //
      //
      // <div className="row" id="blogs">
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

      //
      //
      // {
      //   postKeys.map( key => {
      //     return(
      //       <div className="blog-post">
      //         <h3>{posts[key].content}<small>3/6/2015</small></h3>
      //         <img className="thumbnail" src="http://placehold.it/850x350"/>
      //         <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
      //         <div className="callout">
      //           <ul className="menu simple">
      //             <li><a href="#">Author: Mike Mikers</a></li>
      //             <li><a href="#">Comments: 3</a></li>
      //           </ul>
      //         </div>
      //       </div>
      //     );
      //   })
      // }
