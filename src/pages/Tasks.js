import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "reactstrap";
import TaskList from "../components/TaskList";

export default class Tasks extends Component {
  state = {
    tasks: [],
    fetching: false
  };

  componentDidMount() {
    this.requestTasks();
  }

  requestTasks = () => {
    this.setState({ fetching: true });
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        const { data } = response;
        this.setState({ tasks: data });
      })
      .catch(error => {
        console.warn(error);
      })
      .finally(() => {
        this.setState({ fetching: false });
      });
  };

  onTaskClick = task => {
    this.props.history.push(`/tarefas/${task.id}`);
  };

  renderTasks = () => {
    const { fetching, tasks } = this.state;
    if (fetching) {
      return (
        <div>
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="success" />
          <Spinner color="danger" />
          <Spinner color="warning" />
          <Spinner color="info" />
          <Spinner color="light" />
          <Spinner color="dark" />
        </div>
      );
    }
    return <+ tasks={tasks} onTaskClick={this.onTaskClick} />;
  };

  renderTaskDetail = routeProps => {
    const { taskId } = routeProps.match.params;
    const task = this.state.tasks.find(item => item.id === parseInt(taskId));
    if (!task) {
      return null;
    }

    return (
      <div>
        <div>Id: {task.id}</div>
        <div>Título: {task.title}</div>
        <div>Concluída: {task.completed ? "Sim" : "Não"}</div>
        <div>Usuário ID: {task.userId}</div>
      </div>
    );
  };

  renderTaskRoute = () => (
    <Route path="/tarefas/:taskId" render={this.renderTaskDetail} />
  );

  render() {
    return (
      <div>
        <h1>Página de tarefas</h1>
        {this.renderTasks()}
        {this.renderTaskRoute()}
      </div>
    );
  }
}
