import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

class Filter extends Component {
  // Keeps the track of which element is currently selected

  //"Filter__listItem Filter__listItem--selected"
  render() {
    return (
      <div className="Filter">
        <select>
          <option selected value="country">
            Select By Country
          </option>
          <option value="city">Select By City</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <button>Apply</button>
      </div>
    );
  }
}

export default Filter;
