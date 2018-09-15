import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import formFields from "./formFields";
import SignUpField from "./SignUpField/SignUpField";
import _ from "lodash";
import { signUpFormSubmit } from "../../store/actions/profile/profile";
import { SubmissionError } from "redux-form";

class SignUp extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field component={SignUpField} type="text" label={label} name={name} />
      );
    });
  }

  render() {
    const { handleSubmit, history } = this.props;
    return (
      <div>
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
