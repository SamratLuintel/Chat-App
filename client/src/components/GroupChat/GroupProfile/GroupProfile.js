import React, { Component } from "react";

class GroupProfile extends Component {
  render() {
    const { props } = this;
    return (
      <div className="GroupProfile">
        <div className="GroupProfile__body">
          <img src="GroupProfile__image" alt="" />
          <p className="GroupProfile__name">{props.fullname}</p>
          <p className="GroupProfile__online">Online</p>
          <p>Mantra</p>
        </div>
        <div className="GroupProfile__footer">View My Profile</div>
      </div>
    );
  }
}

export default GroupProfile;
