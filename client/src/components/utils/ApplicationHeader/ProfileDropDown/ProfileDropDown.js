import React, { Component } from "react";
import { connect } from "react-redux";
import DropDown from "components/utils/DropDown/DropDown";
import { logoutUser } from "store/actions/profile/profile";
import { withRouter } from "react-router-dom";

class ProfileDropDown extends Component {
  onLogoutClick = () => {
    const history = this.props.history;
    this.props.logoutUser(history);
  };
  render() {
    const { props } = this;
    let name = "";
    if (props.profile) {
      name = props.profile.fullname;
    }
    return (
      <DropDown displayText={name}>
        <ul className="ProfileDropDown__link-container">
          <li className="ProfileDropDown__links-container__link">
            <i class="fas fa-cog" />
            {"  "}
            <a className="active" href="#Create Page">
              Placeholder
            </a>
          </li>
          <li
            onClick={this.onLogoutClick}
            className="ProfileDropDown__links-container__link"
          >
            <i class="fas fa-sign-out-alt" /> {"  "}
            <span>Logout</span>
          </li>
        </ul>
      </DropDown>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(ProfileDropDown)
);
