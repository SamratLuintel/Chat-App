import React from "react";
import groupBottom from "assets/images/group-bottom.png";

const ManageGroups = () => {
  return (
    <div className="ManageGroups">
      <div className="ManageGroups__background" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ManageGroups__header-content">
              <h1 className="ManageGroups__header-content__title">
                Manage Your Chat Groups
              </h1>
              <p className="ManageGroups__header-content__description">
                Join a Chat Group and come to know what all other peoples are
                currently doing. Groups will let you meet knew people. Add them
                to your friends. And you can send them private message
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="ManageGroups__image" src={groupBottom} c alt="" />
    </div>
  );
};

export default ManageGroups;
