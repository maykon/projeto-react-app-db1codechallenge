import { createAction, handleActions } from "redux-actions";

const INITIAL_POST = [];
const POST_ADD_ACTION = "POST/ADD";
const POST_CLEAR_ACTION = "POST/CLEAR";
const POST_REMOVE_ACTION = "POST/REMOVE";

export const addPostAction = createAction(POST_ADD_ACTION, description => ({
  description
}));

export const clearPostAction = createAction(POST_CLEAR_ACTION);
export const removePostAction = createAction(POST_REMOVE_ACTION);

/* const postHandler = (state = INITIAL_POST, action) => {
  switch (action.type) {
    case POST_ADD_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
};*/

const postHandler = handleActions(
  {
    [POST_ADD_ACTION]: (state, action) => [...state, action.payload],
    [POST_CLEAR_ACTION]: state => [],
    [POST_REMOVE_ACTION]: (state, action) => {
      //return state.filter((post, index) => index !== action.payload)
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }
  },
  INITIAL_POST
);

export const reducers = {
  posts: postHandler
};
