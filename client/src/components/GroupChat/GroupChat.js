import React, { Component } from "react";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import GroupProfile from "components/GroupChat/GroupProfile/GroupProfile";
import OnlineFriends from "components/GroupChat/OnlineFriends/OnlineFriends";
import ChatSection from "components/GroupChat/ChatSection/ChatSection";
import OnlineGroupMembers from "components/GroupChat/OnlineGroupMembers/OnlineGroupMembers";
import socket from "services/socket";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  updateGroupChatMessage,
  updateGroupChatOnlineMembers
} from "store/actions/groupchat/groupchat";

class GroupChat extends Component {
  state = {
    groupname: "",
    exist: false
  };
  componentDidMount = () => {
    const groupname = this.props.match.params.name;

    //Check if the group name is valid
    //redirects the user to error page if it is invalid group name
    this.checkGroupExist(groupname);

    //if verification is passed it sets the group name
    this.setState({ groupname });

    const params = {
      room: groupname,
      name: this.props.profile.fullname
    };

    // Joins the room and stores the user information in server
    // to keep track of online users in particular group
    socket.emit("join", params, () => {
      console.log("User is connected to the server");
      // this.props.updateGroupChatOnlineFriends(user);
    });

    socket.on("usersList", users => {
      console.log(users);
      //updates the list of online group members
      this.props.updateGroupChatOnlineMembers(users);
    });

    socket.on("newMessage", data => {
      console.log("This message is receieved from server", data);
      //updates the state of group chat on new message received
      this.props.updateGroupChatMessage(data);
    });
  };

  checkGroupExist = async groupname => {
    try {
      await axios.get(`/api/get-group/${groupname}`);
      this.setState({ exist: true });
    } catch (err) {
      this.props.history.push("/group/error");
    }
  };
  render() {
    const { props } = this;
    let render = null;
    if (this.state.exist) {
      render = (
        <div className="GroupChat">
          <ApplicationHeader />
          <div className="GroupChat__body">
            <div className="GroupChat__left">
              <GroupProfile fullname={props.profile.fullname} />
              <OnlineFriends />
            </div>
            <div className="GroupChat__middle">
              <ChatSection groupname={this.state.groupname} />
            </div>
            <div className="GroupChat__right">
              <OnlineGroupMembers />
            </div>
          </div>
        </div>
      );
    }
    return render;
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default withRouter(
  connect(
    mapStateToProps,
    { updateGroupChatMessage, updateGroupChatOnlineMembers }
  )(GroupChat)
);
