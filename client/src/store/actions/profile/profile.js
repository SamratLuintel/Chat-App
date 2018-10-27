import axios from "axios";
import { UPDATE_PROFILE_LOGGEDIN, UPDATE_PROFILE_LOGGEDOUT } from "store/types";

export const signUpFormSubmit = async (values, history, SubmissionError) => {
  try {
    const response = await axios.post("/api/signup", values);
  } catch (err) {
    //Server side validation of redux form
    throw new SubmissionError(err.response.data);
  }
};
export const loginFormSubmit = async (values, history, SubmissionError) => {
  console.log(values);
  try {
    const response = await axios.post("/api/login", values);
  } catch (err) {
    //Server side validation of redux form
    throw new SubmissionError(err.response.data);
  }
};

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/get-user");
    dispatch({
      type: UPDATE_PROFILE_LOGGEDIN,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_LOGGEDOUT
    });
  }
};
