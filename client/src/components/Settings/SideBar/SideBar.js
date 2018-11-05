import React, { Component } from "react";
import { connect } from "react-redux";

class SideBar extends Component {
  returnImageUrl = () => {
    let imageUrl;
    //If the user has uploaded the new image in Edit Profile
    //It will preview that image
    if (this.props.profile && this.props.profile.localUserImage) {
      imageUrl = this.props.profile.localUserImage;
    } else {
      if (this.props.profile && this.props.profile.userImage) {
        let fetchedImage = this.props.profile.userImage;
        imageUrl = fetchedImage;
      }
    }
    return imageUrl;
  };
  render() {
    const imageUrl = this.returnImageUrl();
    return (
      <div className="ProfileSettings__SideBar">
        <div className="ProfileSettings__SideBar__upper-section">
          <div className="ProfileSettings__SideBar__image-container">
            <img
              src={imageUrl}
              alt=""
              className="ProfileSettings__SideBar__image"
            />
          </div>
          <p className="ProfileSettings__SideBar__fullname">Samrat Luintel</p>
          <p className="ProfileSettings__SideBar__username">username</p>
        </div>
        <div className="ProfileSettings__SideBar__usermenu">
          <div className="ProfileSettings__SideBar__useraction">
            <span className="ProfileSettings__SideBar__useraction__icon">
              <i class="fas fa-home" />
            </span>
            Overview
          </div>
          <div className="ProfileSettings__SideBar__useraction">
            <span className="ProfileSettings__SideBar__useraction__icon">
              <i class="fas fa-user" />
            </span>
            Profile
          </div>
          <div className="ProfileSettings__SideBar__useraction">
            <span className="ProfileSettings__SideBar__useraction__icon">
              <i class="fas fa-check" />
            </span>
            Interests
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps)(SideBar);
