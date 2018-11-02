import React, { Component } from "react";
import { sendGroupMessage } from "store/actions/groupchat/groupchat";
import { connect } from "react-redux";
import { saveGroupMessage } from "store/actions/group/group";

class SendMessage extends Component {
  state = {
    message: ""
  };
  onFormSubmit = async e => {
    e.preventDefault();
    //saves the group message in the database
    await this.props.saveGroupMessage(this.props.groupname, this.state.message);
    //send the group message to other online user
    this.props.sendGroupMessage(
      this.state.message,
      this.props.groupname,
      this.props.profile
    );
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

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { sendGroupMessage, saveGroupMessage }
)(SendMessage);
