import React, { Component } from "react";
import ChatMessage from "components/GroupChat/ChatSection/ChatMessage/ChatMessage";
import SendMessage from "components/GroupChat/ChatSection/SendMessage/SendMessage";

class ChatSection extends Component {
  render() {
    const { props } = this;
    return (
      <div className="ChatSection">
        <h2 className="ChatSection__header">{props.groupname}</h2>
        <ChatMessage />
        <SendMessage groupname={props.groupname} />
      </div>
    );
  }
}

export default ChatSection;
