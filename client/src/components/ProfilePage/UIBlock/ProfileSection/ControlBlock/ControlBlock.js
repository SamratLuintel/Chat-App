import React, { Component } from "react";
import Icon from "components/utils/Icon/Icon";

class ControlBlock extends Component {
  render() {
    return (
      <div className="ProfileSection__control-block">
        <div className="ProfileSection__control-item ProfileSection__control-item--blue">
          <Icon name="happy-face-icon" size={20} color="#FFFFFF" />
        </div>
        <div className="ProfileSection__control-item ProfileSection__control-item--purple">
          <Icon name="chat---messages-icon" size={20} color="#FFFFFF" />
        </div>
      </div>
    );
  }
}
export default ControlBlock;
