import React, { Component } from "react";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import GroupProfile from "components/GroupChat/GroupProfile/GroupProfile";
import OnlineFriends from "components/GroupChat/OnlineFriends/OnlineFriends";
import ChatSection from "components/GroupChat/ChatSection/ChatSection";
import OnlineGroup from "components/GroupChat/OnlineGroup/OnlineGroup";
import socket from "services/socket";

class GroupChat extends Component {
  state = {
    groupname: ""
  };
  componentDidMount = () => {
    const groupname = this.props.match.params.name;

    this.setState({ groupname });

    const params = {
      room: groupname
    };

    socket.emit("join", params, () => {
      console.log("User has joined this channel");
    });

    socket.on("newMessage", message => {
      console.log("This message is receieved from server", message);
    });
  };

  render() {
    return (
      <div className="GroupChat">
        <ApplicationHeader />
        <div className="GroupChat__body">
          <div className="GroupChat__left">
            <GroupProfile />
            <OnlineFriends />
          </div>
          <div className="GroupChat__middle">
            <ChatSection groupname={this.state.groupname} />
          </div>
          <div className="GroupChat__right">
            <OnlineGroup />
          </div>
        </div>
      </div>
    );
  }
}
export default GroupChat;
