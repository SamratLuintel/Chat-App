import React, { Component } from "react";
import DropDown from "components/utils/DropDown/DropDown";
import MessageRequest from "components/utils/ApplicationHeader/MessagesDropDown/MessageRequest/MessageRequest";
import { connect } from "react-redux";

class MessagesDropDown extends Component {
  renderMessages = () => {
    if (this.props.profile && this.props.profile.lastMessages === 0) {
      //returns all the last messages which are not read

      return <p>There are not any message to show </p>;
    }
    if (this.props.profile && this.props.profile.lastMessages) {
      const unreadMessages = this.totalUnreadMessages(
        this.props.profile.lastMessages
      );

      //sender can be either  senderName or receiverName
      //Just data is aggregated that way from mongoDB
      return unreadMessages.map((message, i) => {
        let sender = message.body.senderName;
        let receiver = message.body.receiverName;
        return (
          <MessageRequest
            key={i}
            sender={sender}
            receiver={receiver}
            message={message.body.message}
            id={message.body._id}
          />
        );
      });
    }
  };

  totalUnreadMessages = messages => {
    //returns those messages which are not send by us
    //and which are not read
    return messages.filter(
      message =>
        message.body.isRead === false &&
        message.body.senderName !== this.props.profile.username
    );
  };
  render() {
    const { props } = this;
    let unreadMessages = null;
    if (props.profile) {
      unreadMessages = this.totalUnreadMessages(props.profile.lastMessages)
        .length;
    }
    return (
      <div className="MessagesDropDown">
        <span className="MessagesDropDown__total-notifications">
          {unreadMessages}
        </span>
        <DropDown displayText={<i class="fas fa-globe globe-icon" />}>
          <div className="MessagesDropDown__dropdown">
            <div className="MessagesDropDown__friend-requests-header">
              Messages Request
            </div>
            <ul className="MessagesDropDown__friend-requests-list">
              {this.renderMessages()}
            </ul>
          </div>
        </DropDown>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps)(MessagesDropDown);
