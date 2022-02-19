import React, { useState } from "react";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import { usersDb } from "../../components/users";

const Users = () => {
  const [users, setUsers] = useState(usersDb);
  return (
    <div className="container">
      <UserAdd users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
};

export default Users;
