import React, { Component } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";
import axios from "axios";
class Dashboard extends Component {
  state = {
    fileName: "",
    group: "",
    country: ""
  };

  onGroupChange = e => {
    this.setState({
      group: e.target.value
    });
  };

  onCountryChange = e => {
    this.setState({
      country: e.target.value
    });
  };

  onFormSubmit = e => {
    console.log("on form submit has been called");
    e.preventDefault();
    const { group, country } = e.target;
    axios.post("/api/dashboard", {
      name: group.value,
      country: country.value,
      image: this.state.fileName
    });

    //TODO redirect the user
  };

  onFileNameChange = name => {
    this.setState({ fileName: name });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            onChange={this.onGroupChange}
            name="group"
            placeholder="Group Name"
            value={this.state.group}
          />
          <input
            type="text"
            onChange={this.onCountryChange}
            name="country"
            placeholder="Country"
            value={this.state.country}
          />
          <ImageUpload
            fileName={this.state.fileName}
            onFileNameChange={this.onFileNameChange}
          />
          <button type="submit">Add Group</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
