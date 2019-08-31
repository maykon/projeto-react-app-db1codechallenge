import axios from "axios";
import { setFetchingTasks, receiveTasks } from "../redux/tasks";

export const requestTasksThunk = () => {
  return (dispatch, getState) => {
    dispatch(setFetchingTasks(true));
    return axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        const { data } = response;
        dispatch(
          receiveTasks({
            error: null,
            data: data
          })
        );
      })
      .catch(error => {
        dispatch(
          receiveTasks({
            error: error.message,
            data: []
          })
        );
      })
      .finally(() => {
        dispatch(setFetchingTasks(false));
      });
  };
};
