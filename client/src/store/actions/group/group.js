import axios from "axios";
import { UPDATE_GROUP } from "store/types";

export const fetchGroups = () => async dispatch => {
  try {
    const res = await axios.get("/api/groups");
    dispatch({
      type: UPDATE_GROUP,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    //TODO update the error list
  }
};