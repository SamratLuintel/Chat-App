import axios from "axios";
import {
  UPDATE_PROFILE_LOGGEDIN,
  UPDATE_PROFILE_LOGGEDOUT,
  JOIN_GLOBAL_ROOM,
  UPDATE_LAST_PRIVATE_MESSAGES
} from "store/types";

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
  console.log("Fetch user is called");
  try {
    const userRes = axios.get("/api/get-user");
    const messagesRes = axios.get("/api/privatechat/lastmessages");
    const user = await userRes;
    const messages = await messagesRes;
    const response = { ...user.data, lastMessages: [...messages.data] };
    dispatch({
      type: UPDATE_PROFILE_LOGGEDIN,
      payload: response
    });
    //receives all the last messages
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_LOGGEDOUT
    });
  }
};

export const joinGlobalRoom = user => async dispatch => {
  console.log("Join Global room is called");
  dispatch({
    type: JOIN_GLOBAL_ROOM,
    payload: user
  });
};

export const logoutUser = history => async dispatch => {
  try {
    await axios.get("/api/logout");
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

//Returns all the last messages of the chat
export const getLastMessages = () => async dispatch => {
  console.log("Get last messages is called");
  try {
    const res = await axios.get("/api/privatechat/lastmessages");
    dispatch({
      type: UPDATE_LAST_PRIVATE_MESSAGES,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
