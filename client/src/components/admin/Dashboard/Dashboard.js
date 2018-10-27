import React, { Component } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";
import axios from "axios";
class Dashboard extends Component {
  state = {
    fileName: "",
    group: "",
    country: "",
    error: ""
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

  onFormSubmit = async e => {
    e.preventDefault();
    const { group, country } = e.target;
    try {
      await axios.post("/api/dashboard", {
        name: group.value,
        country: country.value,
        image: this.state.fileName
      });
    } catch (error) {
      console.log(error.response.data.message);
      this.setState({ error: error.response.data.message });
    }
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
          {this.state.error}
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
