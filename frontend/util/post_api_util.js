"use strict";

const ApiUtil = {
  fetchAllPosts(success){
    $.get('api/posts', success);
  },
  createPost(data, success){
    $.post('api/posts', { post: data }, success);
  },
};

module.exports = ApiUtil;
