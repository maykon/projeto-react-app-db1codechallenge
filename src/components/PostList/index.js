import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

export const PostList = ({ posts }) => (
  <ListGroup>
    {posts.map((post, index) => (
      <ListGroupItem key={index}>{post.description}</ListGroupItem>
    ))}
  </ListGroup>
);

const mapStateToProps = state => ({
  posts: state.posts
});

const PostListConnected = connect(
  mapStateToProps,
  null
)(PostList);

export default PostListConnected;
