import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import groupReducer from "store/reducers/groupReducer";
import profileReducer from "store/reducers/profileReducer";

export default combineReducers({
  form: formReducer,
  profile: profileReducer,
  //Contains the list of chat groups
  group: groupReducer
});
