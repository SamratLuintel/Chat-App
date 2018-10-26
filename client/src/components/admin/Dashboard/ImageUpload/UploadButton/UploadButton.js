import React from "react";

const UploadButton = props => {
  return (
    <div>
      <div className="button">
        <label htmlFor="single">
          <i className="fas fa-upload" />
        </label>
        <input
          type="file"
          id="single"
          name="upload"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default UploadButton;
