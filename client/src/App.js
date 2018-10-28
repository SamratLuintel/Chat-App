import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "components/SignUp/SignUp";
import Login from "components/Login/Login";
import Landing from "components/Landing/Landing";
import Dashboard from "components/admin/Dashboard/Dashboard";
import Home from "components/Home/Home";
import GroupChat from "components/GroupChat/GroupChat";
import { connect } from "react-redux";
import { fetchUser } from "store/actions/profile/profile";
import { withRouter, Switch } from "react-router-dom";
import PrivateRoute from "hoc/PrivateRoute";
import GroupChatErrorPage from "components/GroupChat/GroupChatErrorPage/GroupChatErrorPage";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Switch>
          <PrivateRoute
            exact
            path="/group/error"
            component={GroupChatErrorPage}
          />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/group/:name" component={GroupChat} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchUser }
  )(App)
);
