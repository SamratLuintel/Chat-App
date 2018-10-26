import React from "react";

const GroupSearch = props => {
  return (
    <div className="GroupSearch">
      <input
        className="GroupSearch__input"
        type="text"
        placeholder="Enter Your Group Name"
      />
      <span className="GroupSearch__search-btn">Search</span>
    </div>
  );
};

export default GroupSearch;
