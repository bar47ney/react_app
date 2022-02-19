import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../pages/users/Users";
import Counter from "../components/CounterStudy";
import MyToggleButton from "../components/MyToggleButton/ToggleButton";

const AppRouter = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MyToggleButton toggle={toggle} setToggle={setToggle}>
            Hello!
          </MyToggleButton>
        }
      />
      <Route path="/users" element={<Users />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

export default AppRouter;
