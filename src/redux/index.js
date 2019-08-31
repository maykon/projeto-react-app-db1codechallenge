import { createStore, combineReducers } from "redux";
import { reducers as postReducers } from "./posts";

const { NODE_ENV } = process.env;

const appReducers = combineReducers({ ...postReducers });

const store = createStore(
  appReducers,
  NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default store;
