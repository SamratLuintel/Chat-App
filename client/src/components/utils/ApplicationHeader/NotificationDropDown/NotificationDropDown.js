import React, { Component } from "react";
import DropDown from "components/utils/DropDown/DropDown";
import FriendRequest from "components/utils/ApplicationHeader/NotificationDropDown/FriendRequest/FriendRequest";
import { connect } from "react-redux";

class NotificationDropDown extends Component {
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
      <div className="NotificationDropDown">
        <span className="NotificationDropDown__total-notifications">
          {totalRequest}
        </span>
        <DropDown displayText={<i className="fas fa-bell notification-icon" />}>
          <div className="NotificationDropDown__dropdown">
            <div className="NotificationDropDown__friend-requests-header">
              Friend Request
            </div>
            <ul className="NotificationDropDown__friend-requests-list">
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
export default connect(mapStateToProps)(NotificationDropDown);
