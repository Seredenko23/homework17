import React, {Component} from 'react';
import './User.css'
import ListGroup from "react-bootstrap/ListGroup";

class User extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ListGroup.Item>
        {this.props.user.username}
      </ListGroup.Item>
    );
  }
}

export default User;
