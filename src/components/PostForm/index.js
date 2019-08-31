import React, { Component } from "react";
import { connect } from "react-redux";
import { addPostAction } from "../../redux/posts";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// eslint-disable-next-line no-extend-native
String.prototype.isEmpty = function() {
  return !this.toString();
};

class PostForm extends Component {
  state = {
    description: ""
  };

  setDescription = description => this.setState({ description });

  onChangeInput = event => {
    this.setDescription(event.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    const { description } = this.state;
    const { addPost } = this.props;

    if (description.isEmpty()) return;

    addPost(description);
    this.setDescription("");
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} className="mb-3">
        <h1>Criar Postagem</h1>
        <FormGroup>
          <Label for="description">Descrição: </Label>
          <Input
            id="description"
            type="textarea"
            alt="Descrição"
            rows={3}
            autoFocus
            value={this.state.description}
            onChange={this.onChangeInput}
          />
          <Button className="mt-2" type="submit">
            Postar
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  addPost: addPostAction
};

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
