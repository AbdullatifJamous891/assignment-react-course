import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div>
      <p>UserName: {props.username}</p>
      <p>UserOutput component</p>
    </div>
  );
};

export default UserOutput;
