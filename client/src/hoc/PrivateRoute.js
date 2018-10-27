import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, profile, ...rest }) => {
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
