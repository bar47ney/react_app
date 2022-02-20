import React from "react";
import PostsList from "./PostsList";
import { postsDb } from "../../components/posts"

const Posts = () => {

  return (
    <div className="container mt-5">
      <PostsList posts={postsDb}/>
    </div>
  );
};

export default Posts;
