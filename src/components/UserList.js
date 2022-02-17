import React from "react";

const UserList = ({ users }) => {
  return users.map((user, index) => (
    <div key={index} style={{ margin: "15px" }}>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>Country: {user.country}</div>
    </div>
  ));
};

export default UserList;
