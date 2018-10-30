import React, { Component } from "react";
import ChatGroup from "components/Home/ChatGroups/ChatGroup/ChatGroup";
import { connect } from "react-redux";

export class ChatGroups extends Component {
  renderChatGroups = () => {
    let render = null;
    const rawImageLink =
      "https://res.cloudinary.com/samrat/image/upload/c_fill,g_face,h_100,w_106/v1540572400/";
    if (this.props.groups) {
      render = this.props.groups.map((group, i) => {
        return (
          <ChatGroup
            name={group.name}
            country={group.country}
            image={`${rawImageLink}${group.image}`}
            id={group._id}
            key={group._id}
            favourites={group.favourites.length}
          />
        );
      });
    }
    return render;
  };
  render() {
    return <div className="ChatGroups">{this.renderChatGroups()}</div>;
  }
}

const mapStateToProps = state => ({
  groups: state.group.lists
});

export default connect(mapStateToProps)(ChatGroups);
