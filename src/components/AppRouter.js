import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../pages/users/Users";
import Counter from "../components/CounterStudy";
import MyToggleButton from "../components/MyToggleButton/ToggleButton";
import Posts from "../pages/posts/Posts";
import UserEdit from "../pages/users/UserEdit";
import NotFound from "../pages/NotFound";

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
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/users/:id" element={<UserEdit />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
