import { UPDATE_PROFILE_LOGGEDIN, UPDATE_PROFILE_LOGGEDOUT } from "store/types";

const initialState = null;
//if the user is not logged in, the logged in will be set to false
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_LOGGEDIN:
      return {
        loggedIn: true,
        fullname: action.payload.fullname
      };
    case UPDATE_PROFILE_LOGGEDOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};
