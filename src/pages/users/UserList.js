import React from "react";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
