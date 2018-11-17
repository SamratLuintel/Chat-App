import React, { Component } from "react";
import ChatGroup from "components/Home/ChatGroups/ChatGroup/ChatGroup";
import { connect } from "react-redux";
import CreateChatGroup from "components/Home/ChatGroups/CreateChatGroup/CreateChatGroup";

export class ChatGroups extends Component {
  filterByCountry = groups => {
    const filterCountry = this.props.filterCountry;
    const filterText = this.props.filterText;

    //If there are no inputs on country and text field of filter, just return
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

    if (this.props.groups) {
      //Filters the group list by country
      const filteredGroups = this.filterByCountry(this.props.groups);
      if (filteredGroups.length === 0) {
        return <p>There are no groups to display </p>;
      }
      render = filteredGroups.map((group, i) => {
        const editable = this.props.profile.id === group.createdBy;
        console.log("The group is editable", editable);
        return (
          <div className="col-md-3">
            <ChatGroup
              name={group.name}
              country={group.country}
              image={group.image}
              id={group._id}
              key={group._id}
              favourites={group.favourites.length}
              editable={editable}
            />
          </div>
        );
      });
    }
    return render;
  };
  render() {
    return (
      <div className="ChatGroups">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <CreateChatGroup />
            </div>
            {this.renderChatGroups()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  groups: state.group.lists,
  filterCountry: state.group.filter.country,
  filterText: state.group.filter.text
});

export default connect(mapStateToProps)(ChatGroups);
