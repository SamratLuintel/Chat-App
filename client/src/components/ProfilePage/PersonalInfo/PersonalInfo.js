import React from "react";

const PersonalInfo = props => {
  return (
    <div className="PersonalInfo">
      <div className="PersonalInfo__block-title-container">
        <h6 className="PersonalInfo__block-title">Personal Info</h6>
      </div>
      <div className="PersonalInfo__content">
        <ul className="PersonalInfo__content-list">
          <li className="PersonalInfo__single-content">
            <span className="PersonalInfo__single-content__title">
              About Me:
            </span>
            <span className="PersonalInfo__single-content__text">
              {props.description}
            </span>
          </li>
          <li className="PersonalInfo__single-content">
            <span className="PersonalInfo__single-content__title">
              Full Name
            </span>
            <span className="PersonalInfo__single-content__text">
              {props.fullname}
            </span>
          </li>
          <li className="PersonalInfo__single-content">
            <span className="PersonalInfo__single-content__title">
              User Name
            </span>
            <span className="PersonalInfo__single-content__text">
              {props.username}
            </span>
          </li>
          <li className="PersonalInfo__single-content">
            <span className="PersonalInfo__single-content__title">Gender</span>
            <span className="PersonalInfo__single-content__text">
              {props.gender}
            </span>
          </li>
          <li className="PersonalInfo__single-content">
            <span className="PersonalInfo__single-content__title">Country</span>
            <span className="PersonalInfo__single-content__text">
              {props.country}
            </span>
          </li>
          <li className="PersonalInfo__single-content">
            <span className="PersonalInfo__single-content__title">Email</span>
            <span className="PersonalInfo__single-content__text">
              {props.email}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
