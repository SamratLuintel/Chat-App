import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class OnlineFriend extends Component {
  redirectToPrivateChat = () => {
    //props.name refers to the online friend
    //props.fullname refers to active user name
    const receiverName = this.props.name;
    const senderName = this.props.username;
    this.props.history.push(`/chat/${receiverName}.${senderName}`);
    window.location.reload();
  };
  render() {
    const { props } = this;

    return (
      <li onClick={this.redirectToPrivateChat} className="OnlineFriend">
        {props.name}
      </li>
    );
  }
}

export default withRouter(OnlineFriend);
