import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileDropDown from "components/utils/ApplicationHeader/ProfileDropDown/ProfileDropDown";
import FriendRequestDropDown from "components/utils/ApplicationHeader/FriendRequestDropDown/FriendRequestDropDown";
import MessagesDropDown from "components/utils/ApplicationHeader/MessagesDropDown/MessagesDropDown";
import { withRouter } from "react-router-dom";
import logo from "assets/images/logo.png";
import SearchFriend from "components/utils/ApplicationHeader/SearchFriend/SearchFriend";

class ApplicationHeader extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__brand">
          {" "}
          <Link to="/home" className="Header__brand-img-container">
            <img className="Header__brand-img" src={logo} alt="" />
          </Link>
        </div>
        <div className="Header__title-container">
          <h6 className="Header__title">Profile Page</h6>
        </div>
        <SearchFriend />
        <div className="Header__control-block">
          <FriendRequestDropDown />
          <MessagesDropDown />
          <ProfileDropDown />
        </div>
      </div>
    );
  }
}

export default connect()(ApplicationHeader);
