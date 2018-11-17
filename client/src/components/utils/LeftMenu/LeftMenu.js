import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LeftMenu extends Component {
  onClickHome = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="LeftMenu">
        <ul className="LeftMenu__lists">
          <li className="LeftMenu__lists__list-item" onClick={this.onClickHome}>
            <i class="fas fa-home" />
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(LeftMenu);
