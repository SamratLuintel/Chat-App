import React, { Component } from "react";
import Modal from "components/utils/Modal/Modal";

class AddFriendModal extends Component {
  render() {
    return (
      <Modal triggerText={this.props.triggerText}>
        <div className="AddFriendModal">
          <button className="AddFriendModal__addfriend-btn">
            <i class="fas fa-user-plus" />
            Add Friend
          </button>
          <button>View Profile</button>
        </div>
      </Modal>
    );
  }
}
export default AddFriendModal;
