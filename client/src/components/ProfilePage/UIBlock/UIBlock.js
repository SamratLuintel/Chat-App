import React from "react";
import HeaderImage from "assets/images/top-header1.jpg";
import ProfileSection from "components/ProfilePage/UIBlock/ProfileSection/ProfileSection";

const UIBlock = props => {
  return (
    <div className="ProfilePage__ui-block">
      <div className="ProfilePage__top-header-thumb">
        <img className="ProfilePage__header-image" src={HeaderImage} alt="" />
      </div>
      <ProfileSection
        friendName={props.friendName}
        friendId={props.friendId}
        friendImage={props.friendImage}
      />
    </div>
  );
};
export default UIBlock;
