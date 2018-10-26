import { UPDATE_GROUPS } from "store/types";

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_GROUPS:
      return action.payload;
    default:
      return state;
  }
};
