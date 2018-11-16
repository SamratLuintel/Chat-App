import React, { Component } from "react";
import ImageUpload from "components/EditGroupChat/EditGroupChatForm/ImageUpload/ImageUpload";

class EditGroupChatForm extends Component {
  onCountryChange = e => {
    this.props.countryChange(e.target.value);
  };

  onFileNameChange = name => {
    this.setState({ fileName: name });
  };

  render() {
    return (
      <div className="EditGroupChatForm__body">
        <div className="EditGroupChatForm__ui-block">
          <h6 className="EditGroupChatForm__ui-block__title">
            Create A Chat Group
          </h6>
        </div>
        <div className="EditGroupChatForm__content">
          <div className="EditGroupChatForm__form-group">
            <label className="EditGroupChatForm__form-group__label">
              Group Name
            </label>
            <input
              type="text"
              className="EditGroupChatForm__form-group__input"
              name="group"
              value={this.props.groupname}
              disabled={true}
            />
          </div>
          {this.props.error}

          <div className="EditGroupChatForm__form-group">
            <label className="EditGroupChatForm__form-group__label">
              Country
            </label>
            <input
              type="text"
              className="EditGroupChatForm__form-group__input"
              name="group"
              value={this.props.country}
              onChange={this.onCountryChange}
            />
          </div>
        </div>

        <ImageUpload groupImageChange={this.props.groupImageChange} />
        <div className="EditGroupChatForm__create-btn-container">
          <div
            className="EditGroupChatForm__create-btn-container__button"
            onClick={this.props.editChatGroup}
          >
            Save Changes
          </div>
          <div className="EditGroupChatForm__create-btn-container__button EditGroupChatForm__create-btn-container__button--danger">
            Delete Chat Group
          </div>
        </div>
      </div>
    );
  }
}
export default EditGroupChatForm;
