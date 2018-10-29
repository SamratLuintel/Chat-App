import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers/reducers";
import reduxThunk from "redux-thunk";
import socket from "services/socket";
import * as types from "store/types";
import chatgroup from "redux-middlewares/sockets/chatgroup";
import sendrequest from "redux-middlewares/sockets/sendrequest";
import { fetchUser } from "store/actions/profile/profile";

//Important actions which are repeatedly needed in reducer
const actions = {
  fetchUser
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        composeEnhancers(
          applyMiddleware(
            reduxThunk,
            chatgroup(socket, types),
            sendrequest(socket, types, actions)
          )
        )
      )}
    >
      {children}
    </Provider>
  );
};
