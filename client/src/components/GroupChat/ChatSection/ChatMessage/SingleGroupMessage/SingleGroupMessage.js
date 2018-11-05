import React from "react";

const SingleGroupMessage = props => {
  return (
    <li className="SingleGroupMessage">
      <span className="SingleGroupMessage__image-container">
        <img className="SingleGroupMessage__image" src={props.image} alt="" />
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
