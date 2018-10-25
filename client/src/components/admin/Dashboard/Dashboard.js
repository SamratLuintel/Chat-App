import React, { Component } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <form action="">
          <input type="text" name="club" placeholder="Club Name" />
          <input type="text" name="country" placeholder="Country" />
          <ImageUpload />
          <button>Add Group</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
