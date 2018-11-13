import React, { Component } from "react";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import OnlineOfflineFriends from "components/utils/Chat/OnlineOfflineFriends/OnlineOfflineFriends";
import ChatSection from "components/GroupChat/ChatSection/ChatSection";
import OnlineGroupMembers from "components/GroupChat/OnlineGroupMembers/OnlineGroupMembers";
import LeftMenu from "components/utils/LeftMenu/LeftMenu";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  joinRoom,
  updateGroupName,
  fetchGroupChatMessage
} from "store/actions/groupchat/groupchat";
import { joinRequest } from "store/actions/friend/friend";

class GroupChat extends Component {
  state = {
    exist: false
  };
  componentDidMount = async () => {
    const groupname = this.props.match.params.name;

    //Check if the group name is valid
    //redirects the user to error page if it is invalid group name
    this.checkGroupExist(groupname);

    this.props.updateGroupName(groupname);
    const params = {
      room: groupname,
      name: this.props.profile.fullname,
      image: this.props.profile.userImage
    };

    // Joins the room and stores the user information in server
    // to keep track of online users in particular group
    await this.props.fetchGroupChatMessage(groupname);
    this.props.joinRoom(params);

    this.props.joinRequest(params.name);
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
        <div>
          <ApplicationHeader />
          <OnlineOfflineFriends />
          <LeftMenu />
          <div className="GroupChat">
            <div className="GroupChat__bg" />
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="GroupChat__body">
                    <OnlineGroupMembers />
                    <ChatSection groupname={this.props.groupname} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return render;
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  groupname: state.groupchat.groupname
});

export default withRouter(
  connect(
    mapStateToProps,
    { joinRoom, joinRequest, updateGroupName, fetchGroupChatMessage }
  )(GroupChat)
);
