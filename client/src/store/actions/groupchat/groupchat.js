import { SEND_GROUP_MESSAGE, JOIN_ROOM, UPDATE_GROUPNAME } from "store/types";

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
