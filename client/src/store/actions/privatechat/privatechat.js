import { JOIN_PRIVATE_CHAT_ROOM, SEND_PRIVATE_MESSAGE } from "../../types";

export const joinPrivateChatRoom = rooms => dispatch => {
  dispatch({
    type: JOIN_PRIVATE_CHAT_ROOM,
    payload: rooms
  });
};

export const sendPrivateMessage = (message, sender, room) => dispatch => {
  const data = {
    text: message,
    sender,
    room
  };
  dispatch({
    type: SEND_PRIVATE_MESSAGE,
    payload: data
  });
};
