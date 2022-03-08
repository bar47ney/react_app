import React, { useMemo, useState } from "react";
import MyModal from "../../components/MyModal/MyModal";
import { Link } from "react-router-dom";

const UserList = ({ users, setUsers }) => {
  const [sorter, setSorter] = useState(0);
  const [searchQuery, setSearcQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [deleteUserName, setdeleteUserName] = useState(null);

  const deleteUserReal = () => {
    setUsers(users.filter((user) => user.name !== deleteUserName));
    setShowModal(false);
  };

  const deleteUser = (user) => {
    setShowModal(true);
    setdeleteUserName(user.name);
  };

  const onSearch = (e) => {
    setSearcQuery(e.target.value);
  };

  const onSort = (e) => {
    setSorter(+e.target.value);
  };

  const sortedUsers = useMemo(() => {
    if (sorter) {
      return [...users].sort((a, b) => b.age - a.age);
    }
    if (!sorter) {
      return [...users].sort((a, b) => a.age - b.age);
    }
  }, [sorter, users]);

  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers]);

  return (
    <>
      <MyModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        closeButtonShow
        saveButtonShow
        onConfirm={() => deleteUserReal()}
      >
        <h4>Do you really want to delete or think about?</h4>
      </MyModal>
      <div className="input-group mt-3">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search post"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onSearch}
        />
      </div>
      <select
        className="form-select mt-3"
        aria-label="Default select example"
        onChange={onSort}
      >
        <option defaultValue value="0">
          from Min to Max
        </option>
        <option value="1">from Max to Min</option>
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndSearchedUsers.length ? (
            sortedAndSearchedUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td>
                  <button
                    onClick={() => deleteUser(user)}
                    className="btn btn-primary btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h3 className="mt-3">Not found users</h3>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
