import React, { Component } from "react";
import DropDown from "components/utils/DropDown/DropDown";
import FriendRequest from "components/utils/ApplicationHeader/FriendRequestDropDown/FriendRequest/FriendRequest";
import { connect } from "react-redux";

class FriendRequestDropDown extends Component {
  renderFriendRequest = () => {
    if (this.props.profile && this.props.profile.totalRequest === 0) {
      return "There is no request to show";
    }
    if (this.props.profile && this.props.profile.requests) {
      return this.props.profile.requests.map(request => (
        <FriendRequest
          sender={request.fullname}
          image={request.userImage}
          senderId={request.id}
        />
      ));
    }
  };
  render() {
    const { props } = this;
    let totalRequest = null;
    if (props.profile) {
      totalRequest = props.profile.totalRequest;
    }
    return (
      <div className="FriendRequest">
        <span className="FriendRequest__total-notifications">
          {totalRequest}
        </span>
        <DropDown displayText={<i className="fas fa-bell notification-icon" />}>
          <div className="FriendRequest__dropdown">
            <div className="FriendRequest__friend-requests-header">
              Friend Request
            </div>
            <ul className="FriendRequest__friend-requests-list">
              {this.renderFriendRequest()}
            </ul>
          </div>
        </DropDown>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps)(FriendRequestDropDown);
