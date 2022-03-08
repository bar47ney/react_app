import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { NavLink } from "react-router-dom";
import NotFound from "../NotFound";

const UserEdit = (props) => {
  const [error, setError] = useState();
  const { id } = useParams();
  const usersCrud = new Crud("users");
  const [user, setUser] = useState({});
  const [viewSpinner, setViewSpinner] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setViewSpinner(true);
    usersCrud
      .getOneById(`${id}`)
      .then((res) => {
        setUser(res.data);
        setViewSpinner(false);
      })
      .catch((err) => {
        setError(err);
        setViewSpinner(false);
      });
  };

  //   console.log(id);
  console.log(user);
  //   console.log(error);

  return (
    <>
      {viewSpinner ? (
        <Spinner />
      ) : error ? (
        <NotFound title={error.message} />
      ) : (
        <div
          className="card position-absolute top-50 start-50 translate-middle"
          style={{ width: "18rem" }}
        >
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">username: {user.username}</p>
            <p className="card-text">email: {user.email}</p>
            <p className="card-text">phone: {user.phone}</p>
            <p className="card-text">website: {user.website}</p>
            <NavLink to="/users" className="btn btn-primary">
              Back to Users
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default UserEdit;
