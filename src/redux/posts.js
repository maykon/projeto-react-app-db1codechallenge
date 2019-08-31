import { createAction } from "redux-actions";

const POST_ADD_ACTION = "POST/ADD";
const INITIAL_POST = [];

export const addPostAction = createAction(POST_ADD_ACTION, description => ({
  description
}));

const postHandler = (state = INITIAL_POST, action) => {
  switch (action.type) {
    case POST_ADD_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const reducers = {
  posts: postHandler
};
