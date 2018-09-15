const axios = require("axios");

export const signUpFormSubmit = async (values, history, SubmissionError) => {
  try {
    const response = await axios.post("api/signup", values);
  } catch (err) {
    //Server side validation of redux form
    throw new SubmissionError(err.response.data);
  }
};
export const loginFormSubmit = async (values, history, SubmissionError) => {
  console.log(values);
  try {
    const response = await axios.post("api/login", values);
  } catch (err) {
    //Server side validation of redux form
    throw new SubmissionError(err.response.data);
  }
};
