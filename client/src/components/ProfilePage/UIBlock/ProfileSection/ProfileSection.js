import React, { Component } from "react";
import AuthorArea from "components/ProfilePage/UIBlock/ProfileSection/AuthorArea/AuthorArea";
import ProfileMenu from "components/ProfilePage/UIBlock/ProfileSection/ProfileMenu/ProfileMenu";
import ControlBlock from "components/ProfilePage/UIBlock/ProfileSection/ControlBlock/ControlBlock";

class ProfileSection extends Component {
  render() {
    return (
      <div className="ProfileSection">
        <AuthorArea />
        <ProfileMenu />
        <ControlBlock />
      </div>
    );
  }
}
export default ProfileSection;
