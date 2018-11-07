import React, { Component, Fragment } from "react";

class SearchFriend extends Component {
  render() {
    return (
      <Fragment>
        <div className="SearchFriend">
          <form className="SearchFriend__search-bar">
            <input
              type="text"
              placeholder="Search here for people or pages"
              className="SearchFriend__search-input"
            />
          </form>
        </div>
        <div className="FindFriend">
          <p>Find Friends</p>
        </div>
      </Fragment>
    );
  }
}

export default SearchFriend;
