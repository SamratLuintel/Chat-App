import React from "react";

const UploadButton = props => {
  return (
    <div>
      <div className="button">
        <label htmlFor="multi">
          <i class="fas fa-upload" />
        </label>
        <input type="file" id="multi" onChange={props.onChange} multiple />
      </div>
    </div>
  );
};

export default UploadButton;
