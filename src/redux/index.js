import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers as postsReducers } from "./posts";
import { reducers as tasksReducers } from "./tasks";

const appReducers = combineReducers({ ...postsReducers, ...tasksReducers });

const { NODE_ENV } = process.env;

const composeEnhancers =
  NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
