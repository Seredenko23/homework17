import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Post from "./parts/Post/Post";

class PostList extends Component {
  render() {
    return (
      <ListGroup>
        { this.props.posts.map(post => {
          return (
            <Post key={post.id}
                  post={post}
                  getPosts={this.props.getPosts}
            />)
          })
        }
      </ListGroup>
    );
  }
}

export default PostList;
