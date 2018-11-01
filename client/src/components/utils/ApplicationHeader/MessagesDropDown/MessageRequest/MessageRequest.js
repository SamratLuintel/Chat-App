import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MessageRequest extends Component {
  redirectToChatPage = () => {
    if (this.props.profile.fullname !== this.props.sender) {
      const chatlink = `/chat/${this.props.sender}.${this.props.receiver}`;
      this.props.history.push(chatlink);
      window.location.reload();
    }
  };
  render() {
    const { props } = this;
    return (
      <li className="MessageRequest" onClick={this.redirectToChatPage}>
        <div className="MessageRequest__upper-section">
          <p className="MessageRequest__friend-name">{props.sender}</p>
        </div>
        <div className="MessageRequest__lower-section">
          <div className="MessageRequest__image-container">Image</div>
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
    {}
  )(MessageRequest)
);
