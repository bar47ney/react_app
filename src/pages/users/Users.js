import React, { useEffect, useState } from "react";
import MyModal from "../../components/MyModal/MyModal";
import Crud from "../../service/crud.service";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

const Users = () => {
  const usersCrud = new Crud("users");
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const show = () => {
    setShowModal(true);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    usersCrud
      .getAll()
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
