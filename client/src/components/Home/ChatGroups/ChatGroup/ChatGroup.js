import React from "react";
const ChatGroup = props => {
  return (
    <div className="ChatGroup">
      <h4 className="ChatGroup__name">
        Name:
        {props.name}
      </h4>
      <p className="ChatGroup__country">
        Country:
        {props.country}
      </p>
      <button>Join Group</button>
    </div>
  );
};

export default ChatGroup;
