import { UPDATE_GROUP } from "store/types";

const defaultState = {
  lists: null,
  countries: null
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_GROUP:
      return {
        ...state,
        lists: action.payload.lists,
        countries: action.payload.countries
      };
    default:
      return state;
  }
};
