import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileDropDown from "components/utils/ApplicationHeader/ProfileDropDown/ProfileDropDown";
import NotificationDropDown from "components/utils/ApplicationHeader/NotificationDropDown/NotificationDropDown";

import { withRouter } from "react-router-dom";

class ApplicationHeader extends Component {
  render() {
    return (
      <div className="Header Header--dark">
        <div className="Header__brand">
          {" "}
          <Link to="/home" className="Header__brand-text">
            Chat App
          </Link>
        </div>
        <ul className="navbar">
          <NotificationDropDown />
          <ProfileDropDown />
        </ul>
      </div>
    );
  }
}

export default connect()(ApplicationHeader);
