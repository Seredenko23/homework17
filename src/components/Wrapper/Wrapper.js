import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import UserList from "./parts/UserList/UserList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PostList from "./parts/PostList/PostList";
import {getPostsByUserId} from "../../service/post";
import PostInput from "./parts/PostInput/PostInput";

class Wrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  getPosts = (userId) => {
    getPostsByUserId(userId)
      .then(posts => {
        this.setState({posts: posts})
      })
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg>
            <UserList handler={this.getPosts}/>
          </Col>
          <Col lg>
            <PostList posts={this.state.posts}
                      getPosts={this.getPosts}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PostInput/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Wrapper;
