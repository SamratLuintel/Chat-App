const chatgroup = (socket, types) => {
  return store => {
    socket.on("new message", message => {
      store.dispatch({
        type: types.UPDATE_PRIVATE_CHAT_MESSAGE,
        payload: message
      });
    });
    return next => action => {
      //Send the private message
      if (action.type === types.SEND_PRIVATE_MESSAGE) {
        socket.emit("private message", action.payload);
      }
      if (action.type === types.JOIN_PRIVATE_CHAT_ROOM) {
        //action.payload contains two rooms
        socket.emit("join PM", action.payload);
      }
      return next(action);
    };
  };
};

export default chatgroup;
