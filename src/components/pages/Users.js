import React, { useState } from "react";
import UserList from "../UserList";
import UserAdd from "../../UserAdd";
import { usersDb } from "../users";

const Users = () => {
  const [users, setUsers] = useState(usersDb);
  const addUser = (user) => {
    setUsers([...users, user]);
    console.log(users);
  };
  return (
    <div>
      <UserAdd addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default Users;
