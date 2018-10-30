import React, { Component } from "react";
import { connect } from "react-redux";
import OnlineFriend from "components/GroupChat/OnlineFriends/OnlineFriend/OnlineFriend";

class OnlineFriends extends Component {
  renderOnlineFriends = () => {
    if (this.props.profile && this.props.profile.onlineFriends) {
      return this.props.profile.onlineFriends.map(friend => {
        return <OnlineFriend name={friend.name} />;
      });
    }
  };
  render() {
    let onlineFriends = null;
    if (this.props.profile && this.props.profile.onlineFriends) {
      onlineFriends = this.props.profile.onlineFriends.length;
    }
    return (
      <div className="OnlineFriends">
        <h2 className="OnlineFriends__title">
          Online Friends ({onlineFriends})
        </h2>
        <ul className="OnlineFriends__friends-list">
          {this.renderOnlineFriends()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(OnlineFriends);
