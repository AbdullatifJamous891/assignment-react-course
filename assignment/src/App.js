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
        <UserInput click={this.changeUserNameHandler} />
      </div>
    );
  }
}

export default App;
