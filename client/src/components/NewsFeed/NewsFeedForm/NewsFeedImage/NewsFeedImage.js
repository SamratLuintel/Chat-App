import React, { Component } from "react";

class NewsFeedImage extends Component {
  render() {
    //Currently we accept only one image
    //Add multiple images if you want
    const { files } = this.props;
    if (files.length === 0) return "";
    return (
      <div className="NewsFeedImage">
        <div className="NewsFeedImage__inner">
          <img
            src={files[0].preview}
            alt=""
            className="NewsFeedImage__inner__image"
          />
        </div>
      </div>
    );
  }
}
export default NewsFeedImage;
