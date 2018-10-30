import React, { Component } from "react";
import { connect } from "react-redux";
import { updateGroupFilterCountry } from "store/actions/group/group";

export class Filter extends Component {
  state = {
    filterCountry: ""
  };
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

  onSelectChange = e => {
    console.log("select change is called", e.target.value);
    this.setState({ filterCountry: e.target.value });
  };

  onFilterApply = () => {
    this.props.updateGroupFilterCountry(this.state.filterCountry);
  };
  render() {
    return (
      <div className="Filter">
        <select onChange={this.onSelectChange}>
          <option selected value="">
            Select By Country
          </option>
          {this.renderOptions()}
        </select>
        <button onClick={this.onFilterApply}>Apply</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.group.countries
});

export default connect(
  mapStateToProps,
  { updateGroupFilterCountry }
)(Filter);
