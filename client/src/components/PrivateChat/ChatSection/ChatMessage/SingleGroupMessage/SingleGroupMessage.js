import React from "react";

const SingleGroupMessage = props => {
  return (
    <li className="PrivateChat__SingleGroupMessage">
      <span className="PrivateChat__SingleGroupMessage__image-container">
        <img
          className="PrivateChat__SingleGroupMessage__image"
          src="http://placehold.jp/50x50.png"
          alt=""
        />
      </span>
      <div className="PrivateChat__SingleGroupMessage__body">
        <span className="PrivateChat__SingleGroupMessage__name">
          {props.name}
        </span>
        <br />
        {props.message}
      </div>
    </li>
  );
};
export default SingleGroupMessage;
