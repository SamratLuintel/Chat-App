import React, { Component } from "react";
import SingleGroupMessage from "components/PrivateChat/ChatSection/ChatMessage/SingleGroupMessage/SingleGroupMessage";
import { connect } from "react-redux";

class ChatMessage extends Component {
  renderMessages = () => {
    return this.props.messages.map((message, i) => (
      <SingleGroupMessage name={message.from} message={message.text} key={i} />
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
  messages: state.privatechat.messages
});
export default connect(mapStateToProps)(ChatMessage);
