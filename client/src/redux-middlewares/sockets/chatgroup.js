const chatgroup = (socket, types) => {
  return store => {
    //Updates group chat online members
    socket.on("usersList", users => {
      store.dispatch({
        type: types.UPDATE_GROUPCHAT_ONLINE_MEMBERS,
        payload: users
      });
    });

    //Updates the message of message section
    socket.on("newMessage", data => {
      const newMessage = {
        text: data.text,
        from: data.from
      };
      store.dispatch({
        type: types.UPDATE_GROUPCHAT_MESSAGE,
        payload: newMessage
      });
    });

    return next => action => {
      //send group message
      if (action.type === types.SEND_GROUP_MESSAGE) {
        socket.emit("createMessage", action.payload);
      }

      //joins the room
      if (action.type === types.JOIN_ROOM) {
        socket.emit("join", action.payload, () => {
          console.log("User is connected to the server");
        });
      }
      return next(action);
    };
  };
};

export default chatgroup;
