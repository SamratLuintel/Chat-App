import React, { Component } from "react";
import { connect } from "react-redux";
import { updateGroupFilterCountry } from "store/actions/group/group";
import Select from "react-select";

export class Filter extends Component {
  renderOptions = () => {
    const defaultOption = { value: "", label: "Filter By Country" };

    let options = [];
    if (this.props.countries) {
      options.push(defaultOption);
      this.props.countries.map((country, index) => {
        //country._id is the name of the country
        //sorry for the confusing name
        options.push({
          value: country._id,
          label: country._id
        });
      });
    }
    return (
      <Select
        options={options}
        value={defaultOption}
        onChange={this.onSelectChange}
      />
    );
  };

  onSelectChange = selectedOption => {
    console.log("select change is called", selectedOption.value);
    this.props.updateGroupFilterCountry(selectedOption.value);
  };

  render() {
    return <div className="Filter">{this.renderOptions()}</div>;
  }
}

const mapStateToProps = state => ({
  countries: state.group.countries
});

export default connect(
  mapStateToProps,
  { updateGroupFilterCountry }
)(Filter);
