import React from "react";

const AuthorArea = () => {
  return (
    <div className="ProfileSection__top-header-author">
      <div className="ProfileSection__author-thumb">
        <img
          className="ProfileSection__author-image"
          src="https://graph.facebook.com/533989713719531/picture?type=large"
          alt=""
        />
      </div>
      <div className="ProfileSection__author-content">
        <h4 className="ProfileSection__author-name">Samrat Luintel</h4>
        <div className="ProfileSection__author-country">San Francisco, CA</div>
      </div>
    </div>
  );
};

export default AuthorArea;
