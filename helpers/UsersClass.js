class Users {
  constructor() {
    this.users = [];
  }

  AddUserData(id, name, image, room) {
    const user = {
      id,
      name,
      image,
      room
    };
    this.users.push(user);
    return user;
  }

  RemoveUser(id) {
    const user = this.GetUser(id);
    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }
    return user;
  }

  GetUser(id) {
    const getUser = this.users.filter(user => {
      return user.id === id;
    })[0];
    return getUser;
  }

  GetUsersList(room) {
    const users = this.users.filter(user => user.room === room);
    const namesArray = users.map(user => {
      return { name: user.name, image: user.image };
    });
    return namesArray;
  }
}

module.exports = Users;
