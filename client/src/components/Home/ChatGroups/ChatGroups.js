import React, { Component } from "react";
import ChatGroup from "components/Home/ChatGroups/ChatGroup/ChatGroup";
import { connect } from "react-redux";

export class ChatGroups extends Component {
  filterByCountry = groups => {
    const filterCountry = this.props.filterCountry;
    const filterText = this.props.filterText;
    if (filterCountry === "" && filterText === "") {
      return groups;
    }
    return groups.filter(group => {
      const textMatch =
        filterText === "" ||
        group.name.toLowerCase().includes(filterText.toLowerCase());
      const countryMatch =
        filterCountry === "" || group.country === filterCountry;
      return textMatch && countryMatch;
    });
  };
  renderChatGroups = () => {
    let render = null;
    //cloudinary image link with setting
    const rawImageLink =
      "https://res.cloudinary.com/samrat/image/upload/c_fill,g_face,h_100,w_106/v1540572400/";
    if (this.props.groups) {
      //Filters the group list by country
      const filteredGroups = this.filterByCountry(this.props.groups);
      if (filteredGroups.length === 0) {
        return <p>There are no groups to display </p>;
      }
      render = filteredGroups.map((group, i) => {
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
  groups: state.group.lists,
  filterCountry: state.group.filter.country,
  filterText: state.group.filter.text
});

export default connect(mapStateToProps)(ChatGroups);
