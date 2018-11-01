import {
  UPDATE_PRIVATE_CHAT_MESSAGE,
  FETCH_PRIVATE_CHAT_MESSAGE
} from "store/types";

const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRIVATE_CHAT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages.slice(), action.payload]
      };
    case FETCH_PRIVATE_CHAT_MESSAGE:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
