import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class ChatGroup extends Component {
  onImageClick = () => {
    const name = this.props.name;
    this.props.history.push(`/group/${name}`);
  };
  render() {
    const { props } = this;
    return (
      <div className="ChatGroup">
        <img
          className="ChatGroup__image"
          onClick={this.onImageClick}
          src={props.image}
          alt=""
        />
        <h4 className="ChatGroup__name">
          Name:
          {props.name}
        </h4>
        <p className="ChatGroup__country">
          Country:
          {props.country}
        </p>
        <button>Join Group</button>
      </div>
    );
  }
}
export default withRouter(ChatGroup);
