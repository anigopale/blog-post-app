import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }// field has all event handlers



  render() {
    return (
      <form>
        <Field
          label="Title for post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );// distinct input on screen
  }
}

function validate(values) {
  const errors = {};
  //logic for validation
  if(!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }
  //if errors is empty, form is fine to submit
  //if errors has any property, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
// just like connect function, this connects form state with component
