import React, {Component, PureComponent} from 'react';
import {changePost, createPost} from "../../../../service/post";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidUpdate(prevProp) {
    if(this.props.type === 'post' && prevProp.currentPost !== this.props.currentPost) {
      this.setState({
        title: this.props.currentPost.title,
        body: this.props.currentPost.body,
      })
    }
  }

  changeHandler = (e) => {
    this.setState({
     [e.currentTarget.name]: [e.currentTarget.value]
    })
  };

  submitHandler = async (e) => {
    e.preventDefault();
    if(this.props.type === 'user') {
      await createPost({
        userId: this.props.user.id,
        title: this.state.title,
        body: this.state.body,
      })
    } else {
      await changePost(this.props.currentPost.id, this.state)
    }
    await this.props.getPosts(this.props.user.id)
  };

  render() {
  const { user } = this.props;
    return (
      <React.Fragment>
        { !!Object.keys(user).length &&
          <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text"
                            placeholder="Enter title"
                            value={this.state.title}
                            name={'title'}
                            onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text"
                            placeholder="Enter message"
                            value={this.state.body}
                            name={'body'}
                            onChange={this.changeHandler}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        }
      </React.Fragment>
    );
  }
}

export default PostInput;
