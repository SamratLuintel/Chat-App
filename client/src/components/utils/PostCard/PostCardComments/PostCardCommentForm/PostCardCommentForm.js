import React, { Component } from "react";

class PostCardCommentForm extends Component {
  render() {
    return (
      <div className="PostCardCommentForm">
        <img
          src="https://randomuser.me/api/portraits/med/men/80.jpg"
          alt=""
          className="PostCardCommentForm__author-thumb"
        />
        <textarea
          placeholder="Enter your comment here"
          className="PostCardCommentForm__comment-area"
        />
        <div className="PostCardCommentForm__post-btn">Comment</div>
      </div>
    );
  }
}
export default PostCardCommentForm;
