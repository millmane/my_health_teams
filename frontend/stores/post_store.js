"use strict";

const Store = require('flux/utils').Store;
const PostConstants = require('../constants/post_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const PostStore = new Store(AppDispatcher);
let _posts = {};

PostStore.all = function(){
  return Object.assign({}, _posts);
};

PostStore.find = function(id){
  return Object.assign({}, _posts[id]);
};

function _resetAllPosts(posts){
  _posts = posts;
  PostStore.__emitChange();
}

function _resetSinglePost(post){
  _posts[post.id] = post;
  PostStore.__emitChange();
}

PostStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      _resetAllPosts(payload.posts);
      break;
    case PostConstants.POST_RECEIVED:
      _resetSinglePost(payload.post);
      break;
  }
};

module.exports = PostStore;
