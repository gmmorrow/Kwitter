import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { messageReducers } from "./messages";
import { postMessageReducer } from "./postMessage";
import { deleteMessageReducer } from "./deleteMessage";
import { likeMessageReducer } from "./likes";
import { authReducers } from "./auth";
import { userReducers } from "./users.js";

export { register, login, logout } from "./auth";
export * from "./users";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    auth: combineReducers(authReducers),
    user: combineReducers(userReducers),
    messages: combineReducers(messageReducers),
    postMessage: combineReducers(postMessageReducer),
    deleteMessage: combineReducers(deleteMessageReducer),
    likeMessage: combineReducers(likeMessageReducer)
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});

store.subscribe(() => {
  localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
});
