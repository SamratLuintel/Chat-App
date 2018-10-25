import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "components/SignUp/SignUp";
import Login from "components/Login/Login";
import Home from "components/Home/Home";
import Dashboard from "components/admin/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
