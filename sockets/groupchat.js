module.exports = (io, Users) => {
  const users = new Users();

  io.on("connection", socket => {
    console.log("User connected");

    socket.on("join", (params, callback) => {
      const data = {
        room: params.room,
        name: params.name
      };
      socket.join(params.room);

      users.AddUserData(socket.id, params.name, params.room);

      io.to(params.room).emit("usersList", users.GetUsersList(params.room));

      console.log(users);
      callback();
    });

    socket.on("createMessage", data => {
      console.log("Create message is called", data);
      io.to(data.room).emit("newMessage", {
        text: data.text,
        room: data.room,
        from: data.sender.fullname
      });
    });

    socket.on("disconnect", () => {
      const user = users.RemoveUser(socket.id);

      if (user) {
        io.to(user.room).emit("usersList", users.GetUsersList(user.room));
      }
    });
  });
};
