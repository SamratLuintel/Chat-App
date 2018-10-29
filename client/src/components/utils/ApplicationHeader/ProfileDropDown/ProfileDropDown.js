import React, { Component } from "react";
import { connect } from "react-redux";
import DropDown from "components/utils/DropDown/DropDown";

class ProfileDropDown extends Component {
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
          <li className="ProfileDropDown__links-container__link">
            <i class="fas fa-sign-out-alt" /> {"  "}
            <a href="#Manage Pages">Logout</a>
          </li>
        </ul>
      </DropDown>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileDropDown);
