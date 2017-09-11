import React, { Component } from "react";

export default class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Posts Index</div>;
  }
}
