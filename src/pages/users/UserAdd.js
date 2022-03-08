import React, { useState } from "react";

const UserAdd = ({ users, setUsers, closeModal }) => {
  const onChange = (e) => {
    const field = e.target.id;
    setValues({ ...values, [field]: e.target.value });

    
  };
  const addUser = () => {
    setUsers([...users, values]);
    setValues({
      name: "",
      age: "",
      country: "",
    });
    closeModal();
  };
  const [values, setValues] = useState({
    name: "",
    age: "",
    country: "",
  });
  return (
    <>
      {Object.keys(values).map((value, index) => {
        if (value === "age") {
          return (
            <div className="" key={index}>
              <input
                id={value}
                value={values[value]}
                type="number"
                placeholder={`Input user ${value}`}
                onChange={onChange}
                className="mb-1 form-control"
              />
            </div>
          );
        }
        return (
          <div className="" key={index}>
            <input
              id={value}
              value={values[value]}
              placeholder={`Input user ${value}`}
              onChange={onChange}
              className="mb-1 form-control"
            />
          </div>
        );
      })}
      <div className="">
        <button className="btn btn-primary mt-2 btn-sm" onClick={addUser}>
          Add new User
        </button>
      </div>
    </>
  );
};

export default UserAdd;
