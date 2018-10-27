module.exports = io => {
  io.on("connection", socket => {
    console.log("User connected");

    socket.on("join", (params, callback) => {
      socket.join(params.room);
      callback();
    });

    socket.on("createMessage", message => {
      console.log("Create message is called", message);
      io.to(message.room).emit("newMessage", {
        text: message.text,
        room: message.room
      });
    });
  });
};
