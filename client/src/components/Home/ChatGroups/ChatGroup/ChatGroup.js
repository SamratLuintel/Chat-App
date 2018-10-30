import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { addGroupToFavourite } from "store/actions/group/group";
import { connect } from "react-redux";

export class ChatGroup extends Component {
  onImageClick = () => {
    const name = this.props.name;
    this.props.history.push(`/group/${name}`);
  };

  onAddToFavouriteClick = () => {
    const data = {
      id: this.props.id,
      groupName: this.props.name
    };
    this.props.addGroupToFavourite(data);
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
        <p className="ChatGroup__favourites">
          Favourites:
          {props.favourites}
        </p>
        <button onClick={this.onAddToFavouriteClick}>Add to Favourite</button>
      </div>
    );
  }
}
export default withRouter(
  connect(
    null,
    { addGroupToFavourite }
  )(ChatGroup)
);
