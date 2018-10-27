import React, { Component } from "react";
import { connect } from "react-redux";

export class Filter extends Component {
  renderOptions = () => {
    let render = null;
    if (this.props.countries) {
      render = this.props.countries.map((country, index) => {
        return (
          <option value={country._id} key={index}>
            {country._id}
          </option>
        );
      });
    }
    return render;
  };
  render() {
    return (
      <div className="Filter">
        <select>
          <option selected value="country">
            Select By Country
          </option>
          {this.renderOptions()}
        </select>
        <button>Apply</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.group.countries
});

export default connect(mapStateToProps)(Filter);
