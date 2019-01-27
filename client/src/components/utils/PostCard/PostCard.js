import React, { Component, Fragment } from "react";
import Icon from "components/utils/Icon/Icon";
import classnames from "classnames";
import PostCardComments from "./PostCardComments/PostCardComments";

class PostCard extends Component {
  state = {
    moreHovered: false,
    commentOpen: false
  };

  toggleComment = () =>
    this.setState(prevState => ({ commentOpen: !prevState.commentOpen }));

  render() {
    return (
      <Fragment>
        <div className="PostCard">
          <div className="PostCard__author-thumb">
            <img
              src="https://randomuser.me/api/portraits/med/men/80.jpg"
              alt=""
              className="PostCard__author-thumb__image"
            />
            <div className="PostCard__author-thumb__date-wrapper">
              <h6 className="PostCard__author-thumb__author-name">
                James Spiegel
              </h6>
              <div className="PostCard__author-thumb__date">19 hours ago</div>
            </div>
            <div
              className="PostCard__author-thumb__more"
              onMouseEnter={() => this.setState({ moreHovered: true })}
              onMouseLeave={() => this.setState({ moreHovered: false })}
            >
              <Icon name="three-dots-icon" color="#c0c4d8" size={16} />
              <ul
                className={classnames({
                  PostCard__more__dropdown: true,
                  "PostCard__more__dropdown--visible": this.state.moreHovered
                })}
              >
                <li className="PostCard__more__dropdown__list-item">
                  Edit Item
                </li>
              </ul>
            </div>
          </div>
          <p className="PostCard__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque.
          </p>
          <div className="PostCard__additional-info">
            <div className="PostCard__additional-info__like">
              <Icon name="heart-icon" color="#c0c4d8" size={19} />
              <span>8</span>
            </div>
            <div
              className="PostCard__additional-info__comments-shared"
              onClick={this.toggleComment}
            >
              <Icon name="speech-balloon-icon" color="#c0c4d8" size={19} />
              <span>10</span>
            </div>
          </div>
          <div className="PostCard__control-block">
            <div
              data-tip="Like photo"
              className="PostCard__control-block__single-block"
            >
              <Icon name="heart-icon" color="#fff" size={17} />
            </div>
            <div
              data-tip="Comment"
              className="PostCard__control-block__single-block"
              onClick={this.toggleComment}
            >
              <Icon name="speech-balloon-icon" color="#fff" size={17} />
            </div>
          </div>
        </div>
        {/* Comments */}
        <PostCardComments
          commentOpen={this.state.commentOpen}
          openComment={this.openComment}
        />
      </Fragment>
    );
  }
}
export default PostCard;
