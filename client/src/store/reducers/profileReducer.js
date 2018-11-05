import {
  UPDATE_PROFILE_LOGGEDIN,
  UPDATE_PROFILE_LOGGEDOUT,
  UPDATE_ONLINE_FRIENDS,
  UPDATE_LAST_PRIVATE_MESSAGES,
  UPDATE_LOCAL_USER_IMAGE
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
  for (let i = 0; i < friends.length; i++) {
    for (let k = 0; k < users.length; k++) {
      if (friends[i].friendName === users[k].name) {
        arr.push(users[k]);
      }
    }
  }
  return arr;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_LOGGEDIN:
      return {
        loggedIn: true,
        fullname: action.payload.fullname,
        username: action.payload.username,
        totalRequest: action.payload.totalRequest,
        requests: returnFriendRequests(action.payload.requests),
        friends: action.payload.friendsList,
        userImage: action.payload.userImage,
        lastMessages: action.payload.lastMessages,
        gender: action.payload.gender,
        country: action.payload.country,
        description: action.payload.description,

        //If user uploads a image in Edit Profile Settings it's value is updated
        //It is used for displaying the preview of updated image
        localUserImage: ""
      };
    case UPDATE_LOCAL_USER_IMAGE:
      return {
        ...state,
        localUserImage: action.payload
      };
    case UPDATE_ONLINE_FRIENDS:
      return {
        ...state,
        onlineFriends: returnOnlineFriends(action.payload, state.friends)
      };
    case UPDATE_LAST_PRIVATE_MESSAGES:
      return {
        ...state,
        lastMessages: action.payload
      };
    case UPDATE_PROFILE_LOGGEDOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};
