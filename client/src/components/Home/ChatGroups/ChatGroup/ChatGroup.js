import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { addGroupToFavourite } from "store/actions/group/group";
import { connect } from "react-redux";

export class ChatGroup extends Component {
  onEnterGroup = () => {
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
        <div className="ChatGroup__avatar">
          <img className="ChatGroup__avatar__image" src={props.image} alt="" />
          <div className="ChatGroup__author-content">
            <h5 className="ChatGroup__author-content__name">{props.name}</h5>
            <p className="ChatGroup__author-content__country">
              {props.country}
            </p>
            <p className="ChatGroup__favourites">
              Favourites:
              {props.favourites}
            </p>
          </div>
        </div>
        <div className="ChatGroup__enter-group" onClick={this.onEnterGroup}>
          Enter Group
        </div>
        <div className="ChatGroup__control-block">
          <div
            className="ChatGroup__control-block__btn"
            onClick={this.onAddToFavouriteClick}
          >
            <i class="far fa-star" />
          </div>
          <div
            className="ChatGroup__control-block__btn"
            onClick={this.onAddToFavouriteClick}
          >
            <i class="far fa-edit" />
          </div>
        </div>
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
