import React, { Component } from "react";
import DropDown from "components/utils/DropDown/DropDown";
import FriendRequest from "components/utils/ApplicationHeader/FriendRequestDropDown/FriendRequest/FriendRequest";
import { connect } from "react-redux";
import Icon from "components/utils/Icon/Icon";

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

  componentDidMount = () => {};
  render() {
    const { props } = this;
    let totalRequest = null;
    if (props.profile) {
      totalRequest = props.profile.requests.length;
    }
    return (
      <div className="FriendRequestDropDown">
        <span className="FriendRequestDropDown__total-notifications">
          {totalRequest}
        </span>
        <DropDown
          location="middle"
          displayText={
            <Icon name="happy-face-icon" color="#FFFFFF" size={20} />
          }
        >
          <div className="FriendRequest__dropdown">
            <div className="FriendRequestDropDown__block-container">
              <h6 className="FriendRequestDropDown__block-title">
                FRIEND REQUESTS
              </h6>
              <p className="FriendRequestDropDown__block-btn">PlaceHolder</p>
            </div>
            <ul className="FriendRequestDropDown__friend-requests-list">
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
