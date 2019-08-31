import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { removePostAction } from "../../redux/posts";

export const PostList = ({ posts, removePost }) => {
  return (
    <>
      <ListGroup>
        {posts.map((post, index) => (
          <ListGroupItem key={index}>
            {post.description} <Button close onClick={e => removePost(index)} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  removePost: removePostAction
};

const PostListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListConnected;
