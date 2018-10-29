import { UPDATE_PROFILE_LOGGEDIN, UPDATE_PROFILE_LOGGEDOUT } from "store/types";

const initialState = null;
//if the user is not logged in, the logged in will be set to false
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_LOGGEDIN:
      //contains all the friend request
      const requests = action.payload.requests.map(request => ({
        fullname: request.userId.fullname,
        userImage: request.userId.userImage,
        id: request.userId._id
      }));
      return {
        loggedIn: true,
        fullname: action.payload.fullname,
        totalRequest: action.payload.totalRequest,
        requests: requests,
        friends: action.payload.friendsList
      };
    case UPDATE_PROFILE_LOGGEDOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};
