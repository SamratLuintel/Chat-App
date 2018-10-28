import React, { Component } from "react";
import { connect } from "react-redux";

class ProfileDropDown extends Component {
  state = {
    displayMenu: false
  };

  showDropDownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropDownMenu);
    });
  };

  hideDropDownMenu = event => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropDownMenu);
    });
  };

  render() {
    const { props } = this;
    let name = "";
    if (props.profile) {
      name = props.profile.fullname;
    }
    return (
      <div className="ProfileDropDown">
        <div
          onClick={this.showDropDownMenu}
          className="ProfileDropDown__button-container"
        >
          <div className="ProfileDropDown__button-container__text">
            {name} {"  "} <i class="fas fa-chevron-down" />
          </div>
        </div>
        {this.state.displayMenu ? (
          <ul className="ProfileDropDown__links-container">
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
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileDropDown);
