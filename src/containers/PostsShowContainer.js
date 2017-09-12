import { connect } from "react-redux";

import { fetchPost } from "../actions";

import PostsShow from "../components/PostsShow";

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchPost })(PostsShow);
