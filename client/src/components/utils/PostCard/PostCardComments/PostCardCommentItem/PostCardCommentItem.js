import React, { Component } from "react";

class PostCardCommentItem extends Component {
  render() {
    return (
      <div className="PostCardCommentItem">
        <div className="PostCardCommentItem__author-area">
          <img
            src="https://randomuser.me/api/portraits/med/men/80.jpg"
            alt=""
            className="PostCardCommentItem__author-thumb"
          />
          <div className="PostCardCommentItem__date-area">
            <p className="PostCardCommentItem__author-name">Samrat Luintel</p>
            <p className="PostCardCommentItem__post-time">2 hours ago</p>
          </div>
        </div>
        <p className="PostCardCommentItem__actual-post">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </div>
    );
  }
}
export default PostCardCommentItem;
