import {
  UPDATE_PROFILE_LOGGEDIN,
  UPDATE_PROFILE_LOGGEDOUT,
  UPDATE_ONLINE_FRIENDS
} from "store/types";

const initialState = null;
//if the user is not logged in, the logged in will be set to false

//contains all the friend request
const returnFriendRequests = requests => {
  const friends = requests.map(request => ({
    fullname: request.userId.fullname,
    userImage: request.userId.userImage,
    id: request.userId._id
  }));
  return friends;
};

//returns all the online friends
const returnOnlineFriends = (users, friends) => {
  let arr = [];
  console.log("users from return online friends", users);
  console.log("friends from return online friends", friends);
  for (let i = 0; i < friends.length; i++) {
    for (let k = 0; k < users.length; k++) {
      if (friends[i].friendName === users[k].name) {
        arr.push(users[k]);
      }
    }
  }
  console.log("array from return online friends", arr);
  return arr;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_LOGGEDIN:
      return {
        loggedIn: true,
        fullname: action.payload.fullname,
        totalRequest: action.payload.totalRequest,
        requests: returnFriendRequests(action.payload.requests),
        friends: action.payload.friendsList,
        image: action.payload.userImage
      };
    case UPDATE_ONLINE_FRIENDS:
      return {
        ...state,
        onlineFriends: returnOnlineFriends(action.payload, state.friends)
      };
    case UPDATE_PROFILE_LOGGEDOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};
