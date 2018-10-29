import React from "react";
import AddFriendModal from "components/GroupChat/OnlineGroupMembers/OnlineGroupMember/AddFriendModal/AddFriendModal";

const OnlineGroupMember = props => {
  return (
    <li className="OnlineGroupMember">
      <AddFriendModal triggerText={props.name} name={props.name} />
    </li>
  );
};

export default OnlineGroupMember;
