import React, {Component} from 'react';
import './UserList.css'
import ListGroup from "react-bootstrap/ListGroup";
import { getUsers } from "../../service/user";
import User from "./parts/user/User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getUsers().then(users => {
      this.setState({users: users})
    })
  }

  render() {
    return (
      <ListGroup>
        { this.state.users.map(user => {
          return (<User key={user.id} user={user}/>)
        }) }
      </ListGroup>
    );
  }
}

export default UserList;
