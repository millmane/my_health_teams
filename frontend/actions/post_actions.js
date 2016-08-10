const AppDispatcher = require('../dispatcher/dispatcher');
const PostConstants = require('../constants/post_constants');
const PostApiUtil = require('../util/post_api_util');

PostActions = {
  fetchAllPosts(){
   PostApiUtil.fetchAllPosts(PostActions.receiveAllPosts)
  },
  receiveAllPosts(posts){
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      post: post
    });
  },

  receiveAllPosts(posts) {
  AppDispatcher.dispatch({
    actionType: PostConstants.POSTS_RECEIVED,
    posts: posts
  });
  },

  receiveSinglePost(post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  }
};

module.exports = PostActions;
