import React from "react";

const UserInput = props => {
  return <input type="text" onChange={props.click} value={props.username} />;
};

export default UserInput;
