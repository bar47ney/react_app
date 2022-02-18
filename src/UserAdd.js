import React, { useState } from "react";

const UserAdd = ({ addUser }) => {
  const [user, setUser] = useState({});
  const onChange = (e) => {
    const field = e.target.id;
    setUser({ ...user, [field]: e.target.value });
  };
  const getUser = () => {
    const newUser = {
      name: "",
      age: "",
      country: "",
    };
    Object.keys(values).map((value) => {
      newUser[value] = document.querySelector(`#${value}`).value;
    });
    return newUser;
  };
  const values = {
    name: "text",
    age: "number",
    country: "text",
  };
  return (
    <>
      {Object.keys(values).map((value, index) => (
        <input
          id={value}
          key={index}
          type={values[value]}
          placeholder={`Input user ${value}`}
          // onChange={onChange}
        />
      ))}
      <button onClick={() => addUser(getUser())}>Add new User</button>
    </>
  );
};

export default UserAdd;
