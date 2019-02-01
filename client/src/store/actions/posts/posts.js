import axios from "axios";
import {
  UPDATE_POSTS_SCROLLABLE,
  UPDATE_POSTS_LISTS,
  UPDATE_POSTS_LIKES,
  UPDATE_SINGLE_POST
} from "store/types";

export const fetchPost = (skip, limit) => async dispatch => {
  try {
    console.log("fethc post have been called");
    const res = await axios.get(`/api/posts/find-all/${skip}/${limit}`);
    console.log("Fetch post have been called with data", res.data);
    if (!res.data || res.data.length === 0) {
      dispatch({
        type: UPDATE_POSTS_SCROLLABLE,
        payload: false
      });
    }

    dispatch({
      type: UPDATE_POSTS_LISTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: UPDATE_POSTS_SCROLLABLE,
      payload: false
    });
    console.log(error);
  }
};

export const addLike = (id, index) => async dispatch => {
  try {
    console.log("Add Like have been called", id, index);
    const res = await axios.post(`/api/posts/like/${id}`);
    dispatch({
      type: UPDATE_SINGLE_POST,
      payload: { index: index, post: res.data }
    });
  } catch (error) {
    console.log(error);
  }
};

// Remove Like
export const removeLike = (id, index) => async dispatch => {
  try {
    console.log("Remove like have been called", id, index);
    const res = await axios.post(`/api/posts/unlike/${id}`);
    dispatch({
      type: UPDATE_SINGLE_POST,
      payload: { index: index, post: res.data }
    });
  } catch (error) {
    console.log(error);
    if (error.response) console.log(error.response);
  }
};
