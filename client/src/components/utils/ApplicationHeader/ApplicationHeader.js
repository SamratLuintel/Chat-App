import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileDropDown from "components/utils/ApplicationHeader/ProfileDropDown/ProfileDropDown";
import FriendRequestDropDown from "components/utils/ApplicationHeader/FriendRequestDropDown/FriendRequestDropDown";
import MessagesDropDown from "components/utils/ApplicationHeader/MessagesDropDown/MessagesDropDown";
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
          <FriendRequestDropDown />
          <MessagesDropDown />
          <ProfileDropDown />
        </ul>
      </div>
    );
  }
}

export default connect()(ApplicationHeader);
