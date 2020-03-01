import React, {Component} from 'react';
import {createPost} from "../../../../service/post";
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

  changeHandler = (e) => {
    this.setState({
     [e.currentTarget.name]: [e.currentTarget.value]
    })
  };

  submitHandler = async (e) => {
    e.preventDefault();
    createPost({
      userId: 1,
      title: this.state.title,
      body: this.state.body,
    })
  }

  render() {
    return (
        <Form onSubmit={this.submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text"
                          placeholder="Enter title"
                          value={this.state.title}
                          name={'title'}
                          onChange={this.changeHandler}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
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
    );
  }
}

export default PostInput;
