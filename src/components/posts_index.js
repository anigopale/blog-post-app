import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }//as soon as component renders, this is called
  // better to use it with API requests

  render () {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}



export default connect(null, { fetchPosts })(PostsIndex);
//created a props.fetchPosts = fetchPosts action
// connect function
