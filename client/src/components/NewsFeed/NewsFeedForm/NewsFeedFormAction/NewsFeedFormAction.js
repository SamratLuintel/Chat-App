import React, { Component } from "react";
import Icon from "components/utils/Icon/Icon";
import ReactTooltip from "react-tooltip";
import Dropzone from "react-dropzone";
import classNames from "classnames";

class NewsFeedFormAction extends Component {
  render() {
    return (
      <div className="NewsFeedFormAction">
        <ReactTooltip effect="solid" place="top" />
        {/*It is hidden */}
        <div className="NewsFeedFormAction__dropzone">
          <Dropzone onDrop={this.props.onDrop}>
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  className={classNames("dropzone", {
                    "dropzone--isActive": isDragActive
                  })}
                >
                  <input {...getInputProps()} />
                  <div
                    className="NewsFeedFormAction__image-upload-btn"
                    data-tip="Add Photo"
                  >
                    <Icon name="camera-icon" color="#c2c5d9" size={24} />
                  </div>
                </div>
              );
            }}
          </Dropzone>
        </div>

        <div
          onClick={this.props.postStatus}
          className="NewsFeedFormAction__post-btn"
        >
          Post Status
        </div>
      </div>
    );
  }
}
export default NewsFeedFormAction;
