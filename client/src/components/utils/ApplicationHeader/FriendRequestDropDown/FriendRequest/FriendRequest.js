import React, { Component } from "react";
import {
  acceptFriendRequest,
  rejectFriendRequest
} from "store/actions/friend/friend";
import { connect } from "react-redux";

class FriendRequest extends Component {
  onRequestAccept = () => {
    const data = {
      sender: this.props.sender,
      senderId: this.props.senderId
    };
    this.props.acceptFriendRequest(data);
  };

  onRequestReject = () => {
    const data = {
      senderId: this.props.senderId,
      sender: this.props.sender
    };
    this.props.rejectFriendRequest(data);
  };
  render() {
    const { props } = this;
    return (
      <li className="FriendRequest">
        <div className="FriendRequest__upper-section">
          <p className="FriendRequest__friend-name">{props.sender}</p>
        </div>
        <div className="FriendRequest__lower-section">
          <div className="FriendRequest__image-container">Image</div>
          <div className="FriendRequest__button-container">
            <button
              className="FriendRequest__accept-btn"
              onClick={this.onRequestAccept}
            >
              Accept
            </button>
            <button
              onClick={this.onRequestReject}
              className="FriendRequest__reject-btn"
            >
              Reject
            </button>
          </div>
        </div>
      </li>
    );
  }
}
export default connect(
  null,
  { acceptFriendRequest, rejectFriendRequest }
)(FriendRequest);
