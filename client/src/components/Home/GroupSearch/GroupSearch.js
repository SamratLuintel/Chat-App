import React, { Component } from "react";
import { updateGroupFilterText } from "store/actions/group/group";
import { connect } from "react-redux";

class GroupSearch extends Component {
  state = {
    searchValue: ""
  };

  onInputChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  onSearchClick = () => {
    this.props.updateGroupFilterText(this.state.searchValue);
  };
  render() {
    return (
      <div className="GroupSearch">
        <input
          className="GroupSearch__input"
          type="text"
          value={this.state.searchValue}
          onChange={this.onInputChange}
          placeholder="Enter Your Group Name"
        />
        <span onClick={this.onSearchClick} className="GroupSearch__search-btn">
          Search
        </span>
      </div>
    );
  }
}

export default connect(
  null,
  { updateGroupFilterText }
)(GroupSearch);
