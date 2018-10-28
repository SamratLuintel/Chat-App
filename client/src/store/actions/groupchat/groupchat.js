import socket from "services/socket";
import {
  UPDATE_GROUPCHAT_MESSAGE,
  UPDATE_GROUPCHAT_ONLINE_MEMBERS
} from "store/types";

export const sendGroupMessage = (message, groupname, sender) => dispatch => {
  socket.emit("createMessage", {
    text: message,
    room: groupname,
    sender
  });
};

//Updates the state of group chat
export const updateGroupChatMessage = data => dispatch => {
  console.log("From update Group message", data);
  const newMessage = {
    text: data.text,
    from: data.from
  };
  dispatch({
    type: UPDATE_GROUPCHAT_MESSAGE,
    payload: newMessage
  });
};

//Update the state of online users
export const updateGroupChatOnlineMembers = users => dispatch => {
  dispatch({
    type: UPDATE_GROUPCHAT_ONLINE_MEMBERS,
    payload: users
  });
};
