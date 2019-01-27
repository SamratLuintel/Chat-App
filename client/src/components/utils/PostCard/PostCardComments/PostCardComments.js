import React, { Component } from "react";
import PostCardCommentItem from "./PostCardCommentItem/PostCardCommentItem";
import PostCardCommentForm from "./PostCardCommentForm/PostCardCommentForm";
import classnames from "classnames";

class PostCardComments extends Component {
  render() {
    return (
      <div
        className={classnames({
          PostCardComments: true,
          "PostCardComments--visible": this.props.commentOpen
        })}
      >
        <PostCardCommentForm />
        <PostCardCommentItem />
        <PostCardCommentItem />
      </div>
    );
  }
}

export default PostCardComments;
