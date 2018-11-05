import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setMessageAsRead } from "store/actions/privatechat/privatechat";

class MessageRequest extends Component {
  redirectToChatPage = () => {
    if (this.props.profile.fullname !== this.props.sender) {
      const chatlink = `/chat/${this.props.sender}.${this.props.receiver}`;
      this.props.history.push(chatlink);
      window.location.reload();
    }
  };

  onClick = async () => {
    await this.props.setMessageAsRead(this.props.id);
    this.redirectToChatPage();
  };
  render() {
    const { props } = this;
    return (
      <li className="MessageRequest" onClick={this.onClick}>
        <div className="MessageRequest__upper-section">
          <p className="MessageRequest__friend-name">{props.sender}</p>
        </div>
        <div className="MessageRequest__lower-section">
          <div className="MessageRequest__image-container">
            <img className="MessageRequest__image" src={props.image} alt="" />
          </div>
          <div className="MessageRequest__message">{props.message}</div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default withRouter(
  connect(
    mapStateToProps,
    { setMessageAsRead }
  )(MessageRequest)
);
