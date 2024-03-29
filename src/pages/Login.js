import React, { Component } from 'react';

import { Input, Button } from 'reactstrap'
import { Prompt } from 'react-router-dom'

import { setLoggedIn } from '../utils/fake-login'

export default class Login extends Component {
  state = {
    formChanged: false
  }

  onLoginClick = () => {
    const { previousPath } = this.props.location.state || { previousPath: '/' }
    setLoggedIn(true)
    this.props.history.push(previousPath)
  }

  onInputChange = () => {
    this.setState({
      formChanged: true
    })
  }

  render() {
    return (
      <div>
        <Prompt 
          when={this.state.formChanged}
          message="Deseja descartar as modificações do formulário?"
        />
        <h1>Login</h1>
        <div>
          <Input placeholder='usuário' onChange={this.onInputChange}/>
          <br />
          <Input placeholder='Senha' type="password" onChange={this.onInputChange}/>
          <br />
          <Button onClick={this.onLoginClick}>Entrar</Button>
        </div>
      </div>
    );
  }
}