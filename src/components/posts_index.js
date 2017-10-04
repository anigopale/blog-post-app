import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
//for navigation

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }//as soon as component renders, this is called
  // better to use it with API requests

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      )//for every this.props.posts, arrow function will be passed in a function
      //where argument (post) is used in function
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}// redux, hooked up state to props for this container
//
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
//created a props.fetchPosts = fetchPosts action
// connect function
