import React, { Component } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";
import axios from "axios";
class Dashboard extends Component {
  state = {
    fileName: ""
  };

  onFormSubmit = e => {
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
          <input type="text" name="group" placeholder="Group Name" />
          <input type="text" name="country" placeholder="Country" />
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
