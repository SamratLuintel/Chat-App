import React, { Component } from "react";
import formFields from "components/Landing/Join/Register/formFields";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { signUpFormSubmit } from "store/actions/profile/profile";
import _ from "lodash";
import { SubmissionError } from "redux-form";
import RegisterField from "components/Landing/Join/Register/RegisterField/RegisterField";
import LoginWith from "components/Landing/Join/LoginWith/LoginWith";
class Register extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={RegisterField}
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
      <div className="Register">
        <form
          className="Register__form"
          onSubmit={handleSubmit(values =>
            signUpFormSubmit(values, history, SubmissionError)
          )}
        >
          {this.renderFields()}
          <button className="Register__form__submit-btn" type="Submit">
            Register
          </button>
          <div className="Register__LoginWith__container">
            <LoginWith />
          </div>
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
  })(Register)
);
