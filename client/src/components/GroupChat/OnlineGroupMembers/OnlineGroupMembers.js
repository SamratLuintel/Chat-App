import React, { Component } from "react";
import OnlineGroupMember from "components/GroupChat/OnlineGroupMembers/OnlineGroupMember/OnlineGroupMember";
import { connect } from "react-redux";

class OnlineGroupMembers extends Component {
  renderOnlineFriends = () => {
    return this.props.onlineMembers.map(friend => {
      return <OnlineGroupMember name={friend.name} />;
    });
  };
  render() {
    return (
      <div className="OnlineGroupMembers">
        <h2 className="OnlineGroupMembers__header">Online Groups</h2>
        <ul className="OnlineGroupMembers__members-list">
          {this.renderOnlineFriends()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onlineMembers: state.groupchat.onlineMembers
});
export default connect(mapStateToProps)(OnlineGroupMembers);
