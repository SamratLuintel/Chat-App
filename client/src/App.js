import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
