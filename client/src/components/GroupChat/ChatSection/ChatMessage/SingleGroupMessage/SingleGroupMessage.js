import React from "react";

const SingleGroupMessage = props => {
  return (
    <li className="SingleGroupMessage">
      <span className="SingleGroupMessage__image-container">
        <img
          className="SingleGroupMessage__image"
          src="http://placehold.jp/50x50.png"
          alt=""
        />
      </span>
      <div className="SingleGroupMessage__body">
        <span className="SingleGroupMessage__name">{props.name}</span>
        <br />
        {props.message}
      </div>
    </li>
  );
};
export default SingleGroupMessage;
