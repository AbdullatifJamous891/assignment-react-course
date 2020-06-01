import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: "Abdullatif Jamous"
  };

  changeUserNameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput
          click={this.changeUserNameHandler}
          username={this.state.username}
        />
      </div>
    );
  }
}

export default App;
