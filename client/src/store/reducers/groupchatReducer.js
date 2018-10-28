import {
  UPDATE_GROUPCHAT_MESSAGE,
  UPDATE_GROUPCHAT_ONLINE_MEMBERS
} from "store/types";

const initialState = {
  messages: [],
  onlineFriends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GROUPCHAT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages.slice(), action.payload]
      };
    case UPDATE_GROUPCHAT_ONLINE_MEMBERS:
      return {
        ...state,
        onlineMembers: action.payload
      };
    default:
      return state;
  }
};
