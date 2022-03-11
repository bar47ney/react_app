import React, { useState, useContext } from "react";
import AuthContext from "../context/context";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const onChange = (e) => {
    const field = e.target.id;
    setValues({ ...values, [field]: e.target.value });
  };

  const signIn = () => {
    const userTest = {
      login: "test",
      password: "test",
    };
    userTest.login === values.login && userTest.password === values.password
      ? setAuth(true)
      : setAuth(false);
    setValues({
      login: "",
      password: "",
    });
    // return
  };

  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  console.log(values);

  return (
    <form className="container mt-5 col-6">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Login
        </label>
        <input
          type="text"
          className="form-control"
          id="login"
          aria-describedby="emailHelp"
          onChange={onChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={onChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={signIn}>
        Submit
      </button>
    </form>
  );
};

export default Login;
