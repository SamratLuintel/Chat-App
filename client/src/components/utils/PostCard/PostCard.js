import React, { Component, Fragment } from "react";
import Icon from "components/utils/Icon/Icon";
import classnames from "classnames";
import PostCardComments from "./PostCardComments/PostCardComments";
import moment from "moment";
import { connect } from "react-redux";
import { addLike, removeLike } from "store/actions/posts/posts";

class PostCard extends Component {
  state = {
    moreHovered: false,
    commentOpen: false,
    hasLiked: null
  };

  toggleComment = () =>
    this.setState(prevState => ({ commentOpen: !prevState.commentOpen }));

  onLikeUnlikeClick = async () => {
    if (!this.state.hasLiked) {
      //id,index,likes
      await this.props.addLike(this.props.id, this.props.index);
    } else {
      await this.props.removeLike(this.props.id, this.props.index);
    }
    this.setHasLiked();
  };

  componentDidMount = () => {
    this.setHasLiked();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevProps.profile && this.props.profile && this.props.profile.loggedIn)
      this.setHasLiked();
  };

  setHasLiked = () => {
    if (!this.props.profile) return;
    let hasLiked = false;
    this.props.likes.map(like => {
      if (like.user.toString() === this.props.profile.id) {
        hasLiked = true;
      }
    });
    this.setState({ hasLiked });
  };
  render() {
    const { props } = this;
    return (
      <Fragment>
        <div className="PostCard">
          <div className="PostCard__author-thumb">
            <img
              src={props.user.userImage}
              alt=""
              className="PostCard__author-thumb__image"
            />
            <div className="PostCard__author-thumb__date-wrapper">
              <h6 className="PostCard__author-thumb__author-name">
                {props.user.username}
              </h6>
              <div className="PostCard__author-thumb__date">
                {moment(props.date).fromNow()}
              </div>
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
          <p className="PostCard__text">{props.text}</p>
          <div className="PostCard__additional-info">
            <div
              onClick={this.onLikeUnlikeClick}
              className={classnames({
                "PostCard__additional-info__like": true,
                "PostCard__additional-info__like--already-liked": this.state
                  .hasLiked
              })}
            >
              <Icon name="heart-icon" color="#c0c4d8" size={19} />
              <span>{props.likes.length}</span>
            </div>
            <div
              className="PostCard__additional-info__comments-shared"
              onClick={this.toggleComment}
            >
              <Icon name="speech-balloon-icon" color="#c0c4d8" size={19} />
              <span>{props.comments}</span>
            </div>
          </div>
          <div className="PostCard__control-block">
            <div
              onClick={this.onLikeClick}
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
          comments={props.comments}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(PostCard);
