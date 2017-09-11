import { connect } from "react-redux";

import { fetchPosts } from "../actions"

import PostsIndex from "../components/PostsIndex";

export default connect(null, { fetchPosts })(PostsIndex);
