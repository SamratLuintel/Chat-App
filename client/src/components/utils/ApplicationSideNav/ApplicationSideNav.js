import { slide as Menu } from "react-burger-menu";

import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const styles = {
  bmBurgerBars: {
    background: "#fff",
    height: "3px"
  },
  bmBurgerButton: {
    top: "11px"
  }
};

class ApplicationSideNav extends Component {
  render() {
    return (
      <Menu styles={styles} className="ApplicationSideNav">
        <a id="campaigns" className="bm-item-list" href="/campaigns">
          Campaigns
        </a>
        <a id="templates" className="bm-item-list" href="/templates">
          Templates
        </a>
        <a id="templates" className="bm-item-list">
          LogOut
        </a>
      </Menu>
    );
  }
}

export default connect(
  null,
  {}
)(withRouter(ApplicationSideNav));
