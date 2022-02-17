import React, { useState } from "react";

const UserAdd = () => {
  const [user, setUser] = useState({});
  const onChange = (e) => {
    const field = e.target.id;
    setUser({ ...user, [field]: e.target.value });
  };
  console.log(user);
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
          onChange={onChange}
        />
      ))}
      <button>Add new User</button>
    </>
  );
};

export default UserAdd;
