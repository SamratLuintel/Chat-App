import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        {" "}
        <a href="/api/auth/facebook">Facebook</a>{" "}
        <a href="/api/auth/google">Google</a>
      </div>
    );
  }
}

export default Home;
