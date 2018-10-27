import { reducer as formReducer } from "redux-form";
import authReducer from "store/reducers/authReducer";
import { combineReducers } from "redux";
import groupReducer from "store/reducers/groupReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  //Contains the list of chat groups
  group: groupReducer
});
