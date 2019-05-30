import React, { Component } from "react";
import AddUser from "./AddUser";

class App extends Component {
  state = {
    // users: []
    users: [
      { fname: "james", lname: "priest", username: "jpriest", games: 0 },
      { fname: "mary", lname: "jane", username: "mj4ever", games: 0 }
    ]
  };

  saveUser = user => {
    console.log(user);
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
  };
  render() {
    return (
      <div>
        <AddUser />
      </div>
    );
  }
}

export default App;
