import React, { Component, Fragment } from "react";
import SideBar from "components/Settings/SideBar/SideBar";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import ProfileSignUp from "components/Settings/MainProfile/ProfileSignup/ProfileSignup";

class MainProfile extends Component {
  render() {
    return (
      <Fragment>
        <ApplicationHeader />
        <div className="MainProfile">
          <SideBar />
          <ProfileSignUp />
        </div>
      </Fragment>
    );
  }
}
export default MainProfile;
