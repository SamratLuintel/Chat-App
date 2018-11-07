import React, { Component } from "react";
import { acceptFriendRequestRead } from "store/actions/friend/friend";
import { connect } from "react-redux";
import Icon from "components/utils/Icon/Icon";

class FriendRequestAccepted extends Component {
  readFriendRequestAccept = () => {
    //sets the readBy property in model as read. so user no longer will be notified
    //request has been accepted
    //Id of the friend
    const id = this.props.id;
    this.props.acceptFriendRequestRead(id);
  };
  render() {
    const { props } = this;
    return (
      <li
        className="FriendRequestAccepted"
        onClick={this.readFriendRequestAccept}
      >
        <div className="FriendRequestAccepted__author-thumb">
          <img
            className="FriendRequestAccepted__author-image"
            src={props.image}
            alt=""
          />
        </div>
        <div className="FriendRequestAccepted__notification-event">
          <p className="FriendRequestAccepted__message">
            <strong>You</strong> and {props.friendName} are now friends with
            each other
          </p>
        </div>
      </li>
    );
  }
}

// <div className="FriendRequestAccepted__upper-section">
// <p className="FriendRequestAccepted__friend-name">{props.sender}</p>
// </div>
// <div className="FriendRequestAccepted__lower-section">
// <div className="FriendRequestAccepted__image-container">
//   <img className="FriendRequestAccepted__image" src={props.image} alt="" />
// </div>
// <div className="FriendRequestAccepted__button-container">
//   <button
//     className="FriendRequestAccepted__accept-btn"
//     onClick={this.onRequestAccept}
//   >
//     Accept
//   </button>
//   <button
//     onClick={this.onRequestReject}
//     className="FriendRequestAccepted__reject-btn"
//   >
//     Reject
//   </button>
// </div>
// </div>

export default connect(
  null,
  { acceptFriendRequestRead }
)(FriendRequestAccepted);
