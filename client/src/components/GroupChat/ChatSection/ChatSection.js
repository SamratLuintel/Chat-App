import React, { Component } from "react";
import ChatMessage from "components/GroupChat/ChatSection/ChatMessage/ChatMessage";
import SendMessage from "components/GroupChat/ChatSection/SendMessage/SendMessage";

class ChatSection extends Component {
  render() {
    return (
      <div className="ChatSection">
        <h2 className="ChatSection__header">Group Name</h2>
        <ChatMessage />
        <SendMessage groupname={this.props.groupname} />
      </div>
    );
  }
}

export default ChatSection;
