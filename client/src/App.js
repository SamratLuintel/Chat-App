import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "components/Landing/Landing";
import Dashboard from "components/admin/Dashboard/Dashboard";
import Home from "components/Home/Home";
import GroupChat from "components/GroupChat/GroupChat";
import { connect } from "react-redux";
import { fetchUser, joinGlobalRoom } from "store/actions/profile/profile";
import { withRouter, Switch } from "react-router-dom";
import PrivateRoute from "hoc/PrivateRoute";
import PrivateChat from "components/PrivateChat/PrivateChat";
import GroupChatErrorPage from "components/GroupChat/GroupChatErrorPage/GroupChatErrorPage";
import MainProfile from "components/Settings/MainProfile/ManProfile";
import FindPeople from "components/FindPeople/FindPeople";
import ScrollToTopRoute from "hoc/ScrollToTopRoute";

class App extends Component {
  state = {
    roomJoined: false
  };
  componentDidMount = () => {
    this.props.fetchUser();
  };

  componentDidUpdate = () => {
    if (
      this.props.profile &&
      this.props.profile.loggedIn &&
      !this.state.roomJoined
    ) {
      this.joinGlobalRoom();
    }
  };

  joinGlobalRoom = () => {
    const fullname = this.props.profile.fullname;
    const image = this.props.profile.userImage;
    this.props.joinGlobalRoom({
      fullname,
      image
    });
    this.setState({ roomJoined: true });
  };

  //Private Route contains the option of RouteKey
  //If we set it to true component will rerender on query params change
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
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
        <Switch>
          <PrivateRoute exact path="/chat/:name" component={PrivateChat} />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path="/findpeople/:searchText"
            component={FindPeople}
            RouteKey={true}
          />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path="/settings/profile"
            component={MainProfile}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchUser, joinGlobalRoom }
  )(App)
);
