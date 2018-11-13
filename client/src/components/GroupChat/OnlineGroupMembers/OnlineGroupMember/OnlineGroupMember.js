import React from "react";
import AddFriendModal from "components/GroupChat/OnlineGroupMembers/OnlineGroupMember/AddFriendModal/AddFriendModal";

const OnlineGroupMember = props => {
  return (
    <li className="OnlineGroupMember">
      <div className="OnlineGroupMember__avatar-wrapper">
        <img
          src={props.image}
          className="OnlineGroupMember__avatar-wrapper__image"
          alt=""
        />
      </div>
      <div className="OnlineGroupMember__content">
        <p className="OnlineGroupMember__content__name">{props.name}</p>
        <p className="OnlineGroupMember__content__user-type">NEW USER</p>
      </div>
    </li>
  );
};

export default OnlineGroupMember;
