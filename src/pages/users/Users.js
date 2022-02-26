import React, { useState } from "react";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import { usersDb } from "../../components/users";
import MyModal from "../../components/MyModal/MyModal";

const Users = () => {
  const [users, setUsers] = useState(usersDb);
  const [showModal, setShowModal] = useState(false);
  const show = () => {
    setShowModal(true);
  };
  return (
    <div className="container mb-5">
      <UserList users={users} setUsers={setUsers} />
      <button className="btn btn-secondary" onClick={show}>
        Add user
      </button>
      <MyModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        closeButtonShow
      >
        <UserAdd
          users={users}
          setUsers={setUsers}
          closeModal={() => setShowModal(false)}
        />
      </MyModal>
    </div>
  );
};

export default Users;
