import {
  SEND_GROUP_MESSAGE,
  JOIN_ROOM,
  UPDATE_GROUPNAME,
  FETCH_GROUP_CHAT_MESSAGES
} from "store/types";
import axios from "axios";

export const sendGroupMessage = (message, groupname, sender) => dispatch => {
  const data = {
    text: message,
    room: groupname,
    sender
  };

  dispatch({
    type: SEND_GROUP_MESSAGE,
    payload: data
  });
};

export const joinRoom = params => dispatch => {
  dispatch({
    type: JOIN_ROOM,
    payload: params
  });
};

export const updateGroupName = name => dispatch => {
  dispatch({
    type: UPDATE_GROUPNAME,
    payload: name
  });
};

export const fetchGroupChatMessage = groupname => async dispatch => {
  try {
    console.log("Fetch group chat message is called");
    const res = await axios.get(`/api/group/messages/${groupname}`);
    const groupmessages = res.data.map(message => ({
      from: message.sender.fullname,
      text: message.body
    }));
    dispatch({
      type: FETCH_GROUP_CHAT_MESSAGES,
      payload: groupmessages
    });
  } catch (error) {}
};
