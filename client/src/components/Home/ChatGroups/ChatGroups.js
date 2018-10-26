import React, { Component } from "react";
import ChatGroup from "components/Home/ChatGroups/ChatGroup/ChatGroup";
import { connect } from "react-redux";

class ChatGroups extends Component {
  render() {
    return (
      <div className="ChatGroups">
        <ChatGroup name="Samrat" country="Nepal" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups
});

export default connect(mapStateToProps)(ChatGroups);
