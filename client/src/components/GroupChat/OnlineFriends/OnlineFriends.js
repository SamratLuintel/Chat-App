import React, { Component } from "react";
import { connect } from "react-redux";
import OnlineFriend from "components/GroupChat/OnlineFriends/OnlineFriend/OnlineFriend";

class OnlineFriends extends Component {
  renderOnlineFriends = () => {
    return this.props.onlineFriends.map(friend => {
      return <OnlineFriend name={friend.name} />;
    });
  };
  render() {
    return (
      <div className="OnlineFriends">
        <h2 className="OnlineFriends__title">Online Friends</h2>
        <ul className="OnlineFriends__friends-list" />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   onlineFriends: state.groupchat.onlineFriends
// });

export default connect()(OnlineFriends);
