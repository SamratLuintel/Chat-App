import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import formFields from "components/Login/formFields";
import LoginField from "components/Login/LoginField/LoginField";
import _ from "lodash";
import { loginFormSubmit } from "store/actions/profile/profile";
import { SubmissionError } from "redux-form";

export class Login extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={LoginField}
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
        <form
          onSubmit={handleSubmit(values =>
            loginFormSubmit(values, history, SubmissionError)
          )}
        >
          {this.renderFields()}
          <button type="submit">Send the Survey</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { loginFormSubmit }
)(
  reduxForm({
    form: "loginform"
  })(Login)
);
