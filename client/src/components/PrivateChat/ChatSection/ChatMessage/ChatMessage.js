import React, { Component } from "react";
import SingleGroupMessage from "components/PrivateChat/ChatSection/ChatMessage/SingleGroupMessage/SingleGroupMessage";
import { connect } from "react-redux";

class ChatMessage extends Component {
  renderMessages = () => {
    const userProfileName = this.props.profile.fullname;
    return this.props.messages.map((message, i) => (
      <SingleGroupMessage
        image={message.sender.userImage}
        name={message.sender.username}
        ownMessage={message.sender.username === userProfileName}
        message={message.text}
        key={i}
      />
    ));
  };
  render() {
    return (
      <div className="PrivateChat__ChatMessage">
        <ul className="PrivateChat__ChatMessage__messages">
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  messages: state.privatechat.messages
});
export default connect(mapStateToProps)(ChatMessage);
