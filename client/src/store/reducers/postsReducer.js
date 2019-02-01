import {
  UPDATE_POSTS_LISTS,
  UPDATE_POSTS_SCROLLABLE,
  UPDATE_SINGLE_POST
} from "store/types";
import update from "immutability-helper";

const initialState = {
  list: [],
  scrollable: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_POSTS_LISTS:
      return { ...state, list: [...state.list, ...payload] };

    case UPDATE_POSTS_SCROLLABLE:
      return { ...state, scrollable: payload };

    case UPDATE_SINGLE_POST:
      return update(state, {
        list: {
          [payload.index]: {
            $set: payload.post
          }
        }
      });

    default:
      return state;
  }
};
