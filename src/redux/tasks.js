import { createAction, handleActions } from "redux-actions";

const TASKS_FETCHING_ACTION = "TASKS/FETCHING";
const TASKS_RECEIVE_ACTION = "TASKS/RECEIVE";

export const setFetchingTasks = createAction(TASKS_FETCHING_ACTION);
export const receiveTasks = createAction(TASKS_RECEIVE_ACTION);

const TASKS_INITIAL_STATE = {
  data: [],
  error: null,
  fetching: false
};

const tasksHandler = handleActions(
  {
    [TASKS_FETCHING_ACTION]: (state, action) => ({
      ...state,
      fetching: action.payload
    }),
    [TASKS_RECEIVE_ACTION]: (state, action) => ({
      ...state,
      data: action.payload.data,
      error: action.payload.error
    })
  },
  TASKS_INITIAL_STATE
);

export const reducers = {
  tasks: tasksHandler
};
