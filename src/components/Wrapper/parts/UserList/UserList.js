import React, {Component} from 'react';
import './UserList.css'
import ListGroup from "react-bootstrap/ListGroup";
import { getUsers } from "../../../../service/user";
import User from "./parts/user/User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  handler = async (userId, user) => {
    await this.props.getPosts(userId);
    await this.props.setCurrentUser(user);
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
          return (
            <User key={user.id}
                  user={user}
                  handler={this.handler}
            />)
          })
        }
      </ListGroup>
    );
  }
}

export default UserList;
