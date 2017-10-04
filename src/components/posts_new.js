import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
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
          name="title"
          component={this.renderTitleField}
        />// distinct input on screen
      </form>
    );
  }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);
// just like connect function, this connects form state with component
