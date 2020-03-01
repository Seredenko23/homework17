import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import './Post.css'
import {deletePost} from "../../../../../../service/post";

class Post extends Component {
  constructor(props) {
    super(props)
  }

  handler = async () => {
    await deletePost(this.props.post.id)
    await this.props.getPosts(this.props.post.userId)
  };

  render() {
    return (
      <ListGroup.Item>
        <p>{this.props.post.title}</p>
        <p>{this.props.post.body}</p>
        <Button variant={'danger'}
                onClick={this.handler}
        >
          X
        </Button>
      </ListGroup.Item>
    );
  }
}

export default Post;
