import React, { Component } from "react";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import GroupSearch from "components/Home/GroupSearch/GroupSearch";
import Filter from "components/Home/Filter/Filter";
import ChatGroups from "./ChatGroups/ChatGroups";
import { connect } from "react-redux";
import { fetchGroups } from "store/actions/group/group";

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchGroups();
  };

  render() {
    return (
      <div className="Home">
        <ApplicationHeader />
        <GroupSearch />
        <div className="Home__body">
          <Filter />
          <ChatGroups />
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { fetchGroups }
)(Home);
