import React, { Component, Fragment } from "react";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";
import UploadButton from "./UploadButton/UploadButton";
import axios from "axios";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ImageUpload extends Component {
  state = {
    uploading: false
  };

  onChange = e => {
    const files = Array.from(e.target.files);

    e.target.textContent = files;
    this.setState({ uploading: true });
    const formData = new FormData();
    files.forEach((file, i) => {
      //name it image for the sake of backend
      formData.append("image", file);
    });
    this.sendFormData(formData);
  };

  sendFormData = async formData => {
    try {
      const image = await axios.post("/api/image-upload", formData);
      //calls the parent function on Dashboard
      this.props.onFileNameChange(image.data);
      this.setState({
        uploading: false
      });
    } catch (error) {
      console.log("This errors is coming from ImageUpload.js");
      console.log(error);
    }
  };
  render() {
    let loading = null;
    if (this.state.uploading) {
      loading = (
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
      <Fragment>
        <UploadButton onChange={this.onChange} />
        {loading}
      </Fragment>
    );
  }
}

export default ImageUpload;
