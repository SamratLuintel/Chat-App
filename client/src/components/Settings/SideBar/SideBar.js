import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="ProfileSettings__SideBar">
        <div className="ProfileSettings__SideBar__upper-section">
          <div className="ProfileSettings__SideBar__image-container">
            <img src="" alt="" className="ProfileSettings__SideBar__image" />
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
export default SideBar;
