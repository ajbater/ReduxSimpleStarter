import { connect } from "react-redux";

import { fetchPosts } from "../actions"

import PostsIndex from "../components/PostsIndex";

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
