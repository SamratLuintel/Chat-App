import React, { Component } from "react";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import ChatGroups from "./ChatGroups/ChatGroups";
import { connect } from "react-redux";
import { fetchGroups } from "store/actions/group/group";
import OnlineOfflineFriends from "components/utils/Chat/OnlineOfflineFriends/OnlineOfflineFriends";
import ManageGroups from "components/Home/ManageGroups/ManageGroups";
import LeftMenu from "components/utils/LeftMenu/LeftMenu";
import HomeActionBar from "components/Home/HomeActionBar/HomeActionBar";

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchGroups();
  };

  render() {
    return (
      <div className="Home">
        <ApplicationHeader />
        <LeftMenu />
        <OnlineOfflineFriends />

        {/*Main Content starts here */}
        <ManageGroups />
        <div className="container">
          <HomeActionBar />
        </div>
        <div className="Home__body">
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
