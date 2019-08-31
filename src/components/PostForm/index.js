import React, { Component } from "react";
import { connect } from "react-redux";
import { addPostAction, clearPostAction } from "../../redux/posts";
import { Form as FinalForm } from "react-final-form";
import { Form, Button, Spinner } from "reactstrap";
import { validatePostDescription } from "../../utils/validations";
import InputField from "../InputField";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  onSubmit = (values, form) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), Math.random() * 1000 + 1000);
    }).then(() => {
      const { description } = values;
      const { addPost } = this.props;

      if (!description) return;

      addPost(description);
      this.inputRef.current.focus();
      setTimeout(form.reset);
    });
  };

  renderForm = ({ handleSubmit, form }) => {
    const { clearPosts } = this.props;
    const { submitting, pristine } = form.getState();

    return (
      <Form onSubmit={handleSubmit} className="mb-3">
        <h1>Criar Postagem</h1>
        <InputField
          innerRef={this.inputRef}
          id="description"
          name="description"
          label="Descrição: "
          type="textarea"
          rows={3}
          validate={validatePostDescription}
          render={this.renderFieldDescription}
        />
        <InputField
          name="description2"
          label="Descrição 2: "
          type="textarea"
          rows={3}
          validate={validatePostDescription}
          render={this.renderFieldDescription}
        />
        <InputField
          name="description3"
          label="Descrição 3: "
          type="textarea"
          rows={3}
          validate={validatePostDescription}
          render={this.renderFieldDescription}
        />
        <Button color="primary" type="submit" disabled={submitting || pristine}>
          {submitting && <Spinner size="sm" />}
          Postar
        </Button>{" "}
        <Button type="button" onClick={clearPosts} color="secondary">
          Limpar
        </Button>
      </Form>
    );
  };

  render() {
    return <FinalForm render={this.renderForm} onSubmit={this.onSubmit} />;
  }
}

const mapDispatchToProps = {
  addPost: addPostAction,
  clearPosts: clearPostAction
};

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
