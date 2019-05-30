import React, { Component } from "react";

class AddUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    unique: true,
    games: 0
  };

  newfirstName = firstName => {
    this.setState({
      firstName
    });
  };

  newlastName = lastName => {
    this.setState({
      lastName
    });
  };

  newuserName = userName => {
    this.setState({
      userName,
      unique: true
    });
  };

  addNewUser = e => {
    e.preventDefault();
    console.log(this.props.users);
    console.log(this.state.username);
    // const { fname, lname, username } = this.state;
    // this.props.saveUser({ fname, lname, username });
    if (
      this.props.users.filter(user => user.username === this.state.username)
        .length > 0
    ) {
      console.log("already taken");
      this.setState({ unique: false });
    } else {
      this.setState({ unique: true });
      this.props.saveUser({ ...this.state });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={evt => this.addNewUser(evt.target.value)}>
          <label>FirstName:</label>
          <br />
          <input
            name="fname"
            type="text"
            placeholder="Your first name here"
            value={this.state.firstName}
            onChange={event => this.newfirstName(event.target.value)}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
            name="lname"
            type="text"
            placeholder="Your last name here"
            value={this.state.lastName}
            onChange={event => this.newlastName(event.target.value)}
          />
          <br />
          <label>Username:</label>
          <br />
          <input
            name="username"
            type="text"
            placeholder="Your unique Username"
            value={this.state.userName}
            onChange={event => this.newuserName(event.target.value)}
            required
            className={
              !this.state.unique ? "form-element error" : "form-element"
            }
          />
          {!this.state.unique && (
            <span className="red">Username must be unique!</span>
          )}

          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
