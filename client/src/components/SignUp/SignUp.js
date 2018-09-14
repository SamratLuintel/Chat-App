import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import formFields from "./formFields";
import SignUpField from "./SignUpField/SignUpField";
import _ from "lodash";

class SignUp extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field component={SignUpField} type="text" label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderFields()}
          <button type="Submit">Send the Survey</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "signupform"
})(SignUp);
