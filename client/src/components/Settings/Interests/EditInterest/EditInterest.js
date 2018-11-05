import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class EditInterest extends Component {
  state = {};
  setGender = e => {
    this.setState({ gender: e.target.value });
  };

  setUserImage = e => {
    //starts the image uploading spinner
    this.setState({ imageUploading: true });

    // Uploads the file in state and on completion
    // spinner is turned off

    this.setState({ userImage: e.target.files[0] }, () => {
      this.setState({ imageUploading: false, imageUploaded: true });
    });
    const localUserImage = URL.createObjectURL(e.target.files[0]);
    //Changes the preview image to uploaded image
    this.props.updateLocalUserImage(localUserImage);
  };

  onInputChange = e => {
    this.setState({ errors: {} });
    this.setState({ [e.target.name]: e.target.value });
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    //After the data is fetched once from the server
    //editable is set to true and this function never runs
    //It just sets the value of state from props one time
    if (
      nextProps.profile &&
      nextProps.profile.loggedIn &&
      !prevState.editable
    ) {
    }
  };
  render() {
    let imageUploading = null;
    if (this.state.imageUploading) {
      imageUploading = (
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={15}
          color={"#123abc"}
          loading={this.state.uploading}
        />
      );
    }
    return (
      <div className="EditInterest">
        <h2 className="EditInterest__header">Personal Information</h2>
        <input
          type="text"
          className="EditInterest__username"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.onInputChange}
        />
        {this.state.errors.username}
        <input
          type="text"
          className="EditInterest__fullname"
          placeholder="Fullname"
          name="fullname"
          value={this.state.fullname}
          onChange={this.onInputChange}
        />
        {this.state.errors.fullname}
        <input
          type="text"
          className="EditInterest__location"
          placeholder="City,State,Country"
          name="country"
          value={this.state.country}
          onChange={this.onInputChange}
        />
        {this.state.errors.country}
        <div
          className="EditInterest__gender"
          value={this.state.gender}
          onChange={this.setGender}
        >
          <span>Gender</span>
          <input
            type="radio"
            value="MALE"
            name="gender"
            checked={this.state.gender === "MALE"}
          />{" "}
          Male
          <input
            type="radio"
            value="FEMALE"
            name="gender"
            checked={this.state.gender === "FEMALE"}
          />{" "}
          Female
        </div>
        {this.state.errors.gender}
        <div className="EditInterest__description">
          <p>Description</p>
          <textarea
            id=""
            rows="10"
            name="description"
            value={this.state.description}
            onChange={this.onInputChange}
          />
        </div>
        {this.state.errors.description}
        <div className="EditInterest__support-club">
          <span>Club You Support</span>
          <select name="" id="">
            <option default>Groups You Liked</option>
            <option value="">Samrat</option>
            <option value="">Samata</option>
          </select>
        </div>

        <div
          className="EditInterest__ProfilePhoto"
          onChange={this.setUserImage}
        >
          <p>Add Profile Photo </p>
          <input type="file" />
          {imageUploading}
        </div>
        <div className="EditInterest__save-btn" onClick={this.saveProfile}>
          Save Profile
        </div>
        {this.state.saving && (
          <ClipLoader
            className={override}
            sizeUnit={"px"}
            size={15}
            color={"#123abc"}
            loading={this.state.uploading}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  {}
)(EditInterest);
