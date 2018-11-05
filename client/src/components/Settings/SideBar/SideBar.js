import React, { Component } from "react";
import { connect } from "react-redux";

class SideBar extends Component {
  returnImageUrl = () => {
    const imageRawUrl =
      "https://res.cloudinary.com/samrat/image/upload/c_fill,g_face,h_100,w_106/v1540572400/";
    let imageUrl;
    //If the user has uploaded the new image in Edit Profile
    //It will preview that image
    if (this.props.profile && this.props.profile.localUserImage) {
      imageUrl = this.props.profile.localUserImage;
    } else {
      if (this.props.profile && this.props.profile.userImage) {
        //If it includes chat-app then it means it is the image uploaded by user
        //If it does not then it means it is the image fetched from facebook or google
        let fetchedImage = this.props.profile.userImage;
        if (fetchedImage.includes("chat-app")) {
          imageUrl = `${imageRawUrl}${fetchedImage}`;
        } else {
          imageUrl = fetchedImage;
        }
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
