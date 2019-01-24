import React, { Component } from "react";
import Icon from "components/utils/Icon/Icon";
import classnames from "classnames";
import NewsFeedFormAction from "./NewsFeedFormAction/NewsFeedFormAction";
import NewsFeedImage from "./NewsFeedImage/NewsFeedImage";
import axios from "axios";
import keys from "config/keys";

class NewsFeedForm extends Component {
  state = {
    focused: false,
    post: "",
    //keeps track of just images for now
    //later can be updaetd
    files: []
  };

  _onBlur = () => this.setState({ focused: false });
  _onFocus = () => this.setState({ focused: true });

  onChangePost = e => this.setState({ post: e.target.value });

  //Currently we accept only single file
  //but the user are free to enable multiple image option
  //and it wont break
  onDrop = files => {
    this.setState({
      files: files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  };

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.file.forEach(file => URL.revokeObjectURL(file.preview));
  }

  postStatus = async () => {
    console.log("Post status have been called");
    let imagesId = [];
    if (this.state.files.length !== 0) {
      imagesId = await this.handleUploadImages(this.state.files);
    }
    const images = this.state.files;
  };

  handleUploadImages = async images => {
    let imagesId = [];
    console.log(keys);
    // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
    const uploads = images.map(image => {
      // our formdata
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", keys.cloudinary.uploadPreset); // Replace the preset name with your own
      formData.append("api_key", keys.cloudinary.APIkey); // Replace API key with your own Cloudinary API key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Replace cloudinary upload URL with yours
      return axios
        .post("https://api.cloudinary.com/v1_1/samrat/image/upload", formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(response => imagesId.push(response.data.public_id));
    });

    // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
    try {
      await axios.all(uploads);
      console.log("All images have been successfully updated");
      console.log(imagesId);
      return imagesId;
    } catch (error) {
      console.log(error);
      if (error.response) console.log(error.response);
    }
  };
  render() {
    return (
      <div className="NewsFeedForm">
        <div className="NewsFeedForm__header">
          <div className="NewsFeedForm__header__nav-item">
            <Icon name="status-icon" color="#ff5e3a" size={17} />
            <span>Status</span>
          </div>
        </div>
        <div className="NewsFeedForm__main-area">
          <div className="NewsFeedForm__author-thumb">
            <img
              src="https://randomuser.me/api/portraits/med/men/80.jpg"
              alt=""
              className="NewsFeedForm__author-thumb__image"
            />
          </div>
          <div
            className={classnames({
              "NewsFeedForm__label-area": true,
              "NewsFeedForm__label-area--shrink":
                this.state.focused || this.state.post !== ""
            })}
          >
            Share what your are thinking here...
          </div>
          <textarea
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onChange={this.onChangePost}
            value={this.state.post}
            className={classnames({
              "NewsFeedForm__text-area": true,
              "NewsFeedForm__text-area--bottom-border":
                this.state.files.length === 0
            })}
          />

          {/* Image display section*/}
          <NewsFeedImage files={this.state.files} />

          {/* Action Bar*/}
          <NewsFeedFormAction
            postStatus={this.postStatus}
            onDrop={this.onDrop}
          />
        </div>
      </div>
    );
  }
}
export default NewsFeedForm;
