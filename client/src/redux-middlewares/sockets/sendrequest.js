//react
const sendrequest = (socket, types) => {
  return store => {
    //received the friend request
    socket.on("newFriendRequest", data => {
      console.log("Friend request is received", data);
    });
    return next => action => {
      //joinRequest
      if (action.type === types.JOIN_REQUEST) {
        //action.payload received the sender name
        socket.emit("joinRequest", action.payload, () => {
          console.log("Joined to joinRequest");
        });
      }

      //friend request
      if (action.type === types.FRIEND_REQUEST) {
        socket.emit("friendRequest", action.payload, () => {
          console.log("Friend Request sent");
        });
      }

      return next(action);
    };
  };
};

export default sendrequest;
