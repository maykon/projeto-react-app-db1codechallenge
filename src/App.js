import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import reduxStore from "./redux";

import { Container } from "reactstrap";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import Menu from "./components/Menu";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Posts from "./components/Posts";

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        <Menu />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <PrivateRoute path="/tarefas" component={Tasks} />
            <Route path="/sobre" component={About} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
