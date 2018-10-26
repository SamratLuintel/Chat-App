import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import groupsReducer from "./groupsReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  //Contains the list of chat groups
  groups: groupsReducer
});
