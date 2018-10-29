//node
module.exports = io => {
  io.on("connection", socket => {
    socket.on("joinRequest", (sender, callback) => {
      socket.join(sender);
      callback();
    });

    socket.on("friendRequest", (friend, callback) => {
      io.to(friend.receiver).emit("newFriendRequest", {
        from: friend.sender,
        message: "This is a friend request sent"
      });
      callback();
    });
  });
};
