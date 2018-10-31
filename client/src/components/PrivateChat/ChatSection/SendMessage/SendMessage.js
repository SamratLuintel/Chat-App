import React, { Component } from "react";
import { connect } from "react-redux";
import { sendPrivateMessage } from "store/actions/privatechat/privatechat";

class SendMessage extends Component {
  state = {
    message: ""
  };
  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.message.trim().length > 0) {
      this.props.sendPrivateMessage(
        this.state.message,
        this.props.profile,
        this.props.room
      );
      this.setState({ message: "" });
    }
  };

  onTextChange = e => {
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <div className="PrivateChat__SendMessage">
        <form onSubmit={this.onFormSubmit}>
          <textarea
            name="message"
            className="PrivateChat__SendMessage__message"
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

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { sendPrivateMessage }
)(SendMessage);
