import { JOIN_REQUEST, FRIEND_REQUEST } from "store/types";
import axios from "axios";

export const joinRequest = sender => dispatch => {
  //dispatched action is called in sendrequest socket middleware
  dispatch({
    type: JOIN_REQUEST,
    payload: sender
  });
};

export const sendFriendRequest = data => async dispatch => {
  console.log("send Friend Request is called", data);
  try {
    await axios.post("/api/friendrequest", {
      receiver: data.receiver
    });
    dispatch({
      type: FRIEND_REQUEST,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};
