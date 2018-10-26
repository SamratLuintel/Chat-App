import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileDropDown from "components/utils/ApplicationHeader/ProfileDropDown/ProfileDropDown";
import { withRouter } from "react-router-dom";

class ApplicationHeader extends Component {
  render() {
    return (
      <div className="Header Header--dark">
        <div className="Header__brand">Chat App</div>
        <ul className="navbar">
          <Link
            className="navbar__navitem navbar__navitem--loggedIn"
            to="/templates"
          >
            Members
          </Link>
          {}
          <ProfileDropDown />
        </ul>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   profile: state.profile
// });
// export default connect(
//   mapStateToProps,
//   { clearCurrentProfile, logoutUser }
// )(withRouter(LoggedInHeader));

export default ApplicationHeader;
