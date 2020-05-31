import React from "react";
import "./UserInput.css";

const UserInput = props => {
  return <input type="text" onChange={props.click} />;
};

export default UserInput;
