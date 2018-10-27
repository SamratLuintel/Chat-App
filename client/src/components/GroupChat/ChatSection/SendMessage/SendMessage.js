import React, { Component } from "react";
import { sendGroupMessage } from "store/actions/groupchat/groupchat";
import { connect } from "react-redux";

class SendMessage extends Component {
  state = {
    message: ""
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.sendGroupMessage(this.state.message, this.props.groupname);
    this.setState({ message: "" });
  };

  onTextChange = e => {
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <div className="SendMessage">
        <form onSubmit={this.onFormSubmit}>
          <textarea
            name="message"
            className="SendMessage__message"
            cols="30"
            rows="10"
            onChange={this.onTextChange}
            value={this.state.message}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { sendGroupMessage }
)(SendMessage);
