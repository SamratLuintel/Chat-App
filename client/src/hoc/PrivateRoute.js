import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, profile, ...rest }) => {
  //Initially before the user is fetched from the server profile is null
  // So to avoid redirecting to login before  checking the user whether they are logged in or
  //not, below if check is added
  if (profile) {
    return (
      <Route
        {...rest}
        render={props =>
          profile.loggedIn === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(PrivateRoute);
