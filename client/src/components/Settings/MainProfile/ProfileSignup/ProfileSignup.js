import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import {
  saveUserImage,
  saveUserProfile,
  updateLocalUserImage
} from "store/actions/profile/editprofile";
import profileValidation from "components/Settings/MainProfile/ProfileSignup/profileValidation";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ProfileSignUp extends Component {
  state = {
    imageUploaded: false,
    imageUploading: false,
    errors: {},
    saving: false,
    saved: false,
    editable: false,

    //main form data goes below here
    username: "",
    fullname: "",
    country: "",
    gender: "",
    description: "",
    //This is never updated even though user selects new image
    //it is changed during submission
    //see the code on saveProfile
    userImage: ""
  };
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
    this.props.updateLocalUserImage(localUserImage);
  };

  onInputChange = e => {
    this.setState({ errors: {} });
    this.setState({ [e.target.name]: e.target.value });
  };

  saveProfile = async () => {
    if (this.state.imageUploading)
      return console.log("You cant submit a form while image is uploading");
    const stateCopy = { ...this.state };
    this.setState({ saving: true });
    const data = {
      username: stateCopy.username,
      fullname: stateCopy.fullname,
      country: stateCopy.country,
      gender: stateCopy.gender,
      description: stateCopy.description,
      userImage: stateCopy.userImage
    };
    //profile Validation
    let { errors, isValid } = profileValidation(data);

    if (isValid) {
      //If user does not want to submit the image we respect their right
      //hence isValid passes even though the image is empty
      let imageId = null;
      if (this.state.imageUploaded && this.state.userImage) {
        imageId = await this.props.saveUserImage(this.state.userImage);
      }

      //If new image is fetched. userImage of cloned state is changed.
      //userImage of original state is never changed due to way this code is set up
      if (imageId) data.userImage = imageId;

      await this.props.saveUserProfile(data);
      this.setState({ saving: false });
    } else {
      this.setState({ errors });
      return console.log("Errors from Profile Sign up", errors);
    }
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
      return {
        username: nextProps.profile.username,
        fullname: nextProps.profile.fullname,
        gender: nextProps.profile.gender,
        description: nextProps.profile.description,
        userImage: nextProps.profile.userImage,
        country: nextProps.profile.country,
        editable: true
      };
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
      <div className="ProfileSignUp">
        <h2 className="ProfileSignUp__header">Personal Information</h2>
        <input
          type="text"
          className="ProfileSignUp__username"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.onInputChange}
        />
        {this.state.errors.username}
        <input
          type="text"
          className="ProfileSignUp__fullname"
          placeholder="Fullname"
          name="fullname"
          value={this.state.fullname}
          onChange={this.onInputChange}
        />
        {this.state.errors.fullname}
        <input
          type="text"
          className="ProfileSignUp__location"
          placeholder="City,State,Country"
          name="country"
          value={this.state.country}
          onChange={this.onInputChange}
        />
        {this.state.errors.country}
        <div
          className="ProfileSignUp__gender"
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
        <div className="ProfileSignUp__description">
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
        <div className="ProfileSignUp__support-club">
          <span>Club You Support</span>
          <select name="" id="">
            <option default>Groups You Liked</option>
            <option value="">Samrat</option>
            <option value="">Samata</option>
          </select>
        </div>

        <div
          className="ProfileSignUp__ProfilePhoto"
          onChange={this.setUserImage}
        >
          <p>Add Profile Photo </p>
          <input type="file" />
          {imageUploading}
        </div>
        <div className="ProfileSignUp__save-btn" onClick={this.saveProfile}>
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
  { saveUserImage, saveUserProfile, updateLocalUserImage }
)(ProfileSignUp);
