import React, { Component } from "react";
import ChatMessage from "components/PrivateChat/ChatSection/ChatMessage/ChatMessage";
import SendMessage from "components/PrivateChat/ChatSection/SendMessage/SendMessage";

class ChatSection extends Component {
  render() {
    const { props } = this;
    return (
      <div className="PrivateChat__ChatSection">
        <h2 className="PrivateChat__ChatSection__header">
          {props.receiverName}
        </h2>
        <ChatMessage />
        <SendMessage room={props.room} groupname={props.groupname} />
      </div>
    );
  }
}

export default ChatSection;
