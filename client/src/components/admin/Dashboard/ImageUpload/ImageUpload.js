import React, { Component } from "react";
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

  onChange = async e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    try {
      const images = await axios.post("/api/image-upload", formData);
      this.setState({
        uploading: false
      });
    } catch (error) {
      console.log("This errors is coming from ImageUpload.js");
      console.log(error);
    }
  };

  render() {
    const { uploading } = this.state;
    const content = () => {
      switch (true) {
        case uploading:
          return (
            <ClipLoader
              className={override}
              sizeUnit={"px"}
              size={15}
              color={"#123abc"}
              loading={this.state.loading}
            />
          );
        default:
          return <UploadButton onChange={this.onChange} />;
      }
    };
    return content();
  }
}

export default ImageUpload;
