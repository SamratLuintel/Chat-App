import React, { Component } from "react";
import { connect } from "react-redux";

class UserProfile extends Component {
  render() {
    const { props } = this;
    let image;
    if (props.profile && props.profile.userImage) {
      image = props.profile.userImage;
    }
    return (
      <div className="UserProfile">
        <div className="UserProfile__body">
          <img src={image} className="UserProfile__image" alt="" />
          <p className="UserProfile__name">{props.fullname}</p>
          <p className="UserProfile__online">Online</p>
          <p>Mantra</p>
        </div>
        <div className="UserProfile__footer">View My Profile</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps)(UserProfile);
