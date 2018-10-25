import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import formFields from "components/SignUp/formFields";
import SignUpField from "components/SignUp/SignUpField/SignUpField";
import _ from "lodash";
import { signUpFormSubmit } from "store/actions/profile/profile";
import { SubmissionError } from "redux-form";

export class SignUp extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={SignUpField}
          type="text"
          key={label}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    const { handleSubmit, history } = this.props;
    return (
      <div>
        <a href="/api/auth/facebook">Sign Up Facebook</a>
        <a href="/api/auth/google">Sign Up Google</a>
        <form
          onSubmit={handleSubmit(values =>
            signUpFormSubmit(values, history, SubmissionError)
          )}
        >
          {this.renderFields()}
          <button type="Submit">Send the Survey</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { signUpFormSubmit }
)(
  reduxForm({
    form: "signupform"
  })(SignUp)
);
