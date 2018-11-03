import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { saveUserImage } from "store/actions/profile/editprofile";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ProfileSignUp extends Component {
  state = {
    formImage: "",
    imageUploaded: false,
    imageUploading: false
  };
  setGender = () => {};

  setFormImage = e => {
    //enables the image uploading spinner
    this.setState({ imageUploading: true });

    //Uploads the file in state and on completion
    // spinner is turned off

    this.setState({ formImage: e.target.files[0] }, () => {
      console.log(
        "From profile sign up. the uploaded file is",
        this.state.formImage
      );

      //imageUploaded is set to true
      //so while saving file in database
      this.setState({ imageUploading: false });
    });
  };

  saveProfile = async () => {
    if (!this.state.imageUploading) {
      this.props.saveUserImage(this.state.formImage);
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
        />
        <input
          type="text"
          className="ProfileSignUp__fullname"
          placeholder="Fullname"
        />
        <input
          type="text"
          className="ProfileSignUp__location"
          placeholder="City,State,Country"
        />
        <div className="ProfileSignUp__gender" onChange={this.setGender}>
          <span>Gender</span>
          <input type="radio" value="MALE" name="gender" /> Male
          <input type="radio" value="FEMALE" name="gender" /> Female
        </div>
        <div className="ProfileSignUp__description">
          <p>Mantra</p>
          <textarea name="" id="" rows="10" />
        </div>
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
          onChange={this.setFormImage}
        >
          <p>Add Profile Photo </p>
          <input type="file" />
          {imageUploading}
        </div>
        <div className="ProfileSignUp__save-btn" onClick={this.saveProfile}>
          Save Profile
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { saveUserImage }
)(ProfileSignUp);
