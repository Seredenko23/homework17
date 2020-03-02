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
      inputType: 'user',
      currentPost: {},
      currentUser: {},
      posts: []
    }
  }

  setCurrentPost = (post) => {
    this.setState({
      inputType: "post",
      currentPost: post
    })
  }

  setCurrentUser = (user) => {
    this.setState({
      inputType: "user",
      currentUser: user
    })
  }

  getPosts = (userId) => {
    getPostsByUserId(userId)
      .then(posts => {
        this.setState({
          posts: posts
        })
      })
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg>
            <UserList getPosts={this.getPosts}
                      setCurrentUser={this.setCurrentUser}
            />
          </Col>
          <Col lg>
            <PostList posts={this.state.posts}
                      getPosts={this.getPosts}
                      setCurrentPost={this.setCurrentPost}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PostInput user={this.state.currentUser}
                       currentPost={this.state.currentPost}
                       getPosts={this.getPosts}
                       type={this.state.inputType}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Wrapper;
