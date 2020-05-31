import React, { useState } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

function App() {
  const [usernameState, setUsernameState] = useState({
    username: "Abdullatif Jamous"
  });

  const changeUserNameHandler = event => {
    setUsernameState({
      username: event.target.value
    });
  };

  return (
    <div className="App">
      <UserOutput username={usernameState.username} />
      <UserInput click={changeUserNameHandler} />
    </div>
  );
}

export default App;
