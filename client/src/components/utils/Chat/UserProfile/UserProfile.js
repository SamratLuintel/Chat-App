import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    const { props } = this;
    return (
      <div className="UserProfile">
        <div className="UserProfile__body">
          <img src="UserProfile__image" alt="" />
          <p className="UserProfile__name">{props.fullname}</p>
          <p className="UserProfile__online">Online</p>
          <p>Mantra</p>
        </div>
        <div className="UserProfile__footer">View My Profile</div>
      </div>
    );
  }
}

export default UserProfile;
