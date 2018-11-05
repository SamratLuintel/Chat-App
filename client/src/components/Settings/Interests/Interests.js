import React, { Component, Fragment } from "react";
import SideBar from "components/Settings/SideBar/SideBar";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import EditInterest from "components/Settings/Interests/EditInterest/EditInterest";

class Interests extends Component {
  render() {
    return (
      <Fragment>
        <ApplicationHeader />
        <div className="Interests">
          <SideBar />
          <EditInterest />
        </div>
      </Fragment>
    );
  }
}
export default Interests;
