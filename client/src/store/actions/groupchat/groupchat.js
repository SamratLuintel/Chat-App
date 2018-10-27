import socket from "services/socket";

export const sendGroupMessage = (message, groupname) => dispatch => {
  console.log("From send group message", message, groupname);
  socket.emit("createMessage", {
    text: message,
    room: groupname
  });
};
