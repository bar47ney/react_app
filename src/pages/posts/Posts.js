import React, { useState, useMemo } from "react";
import PostsList from "./PostsList";
import { postsDb } from "../../components/posts";

const Posts = () => {
  const [sorter, setSorter] = useState(0);
  const [searchQuery, setSearcQuery] = useState("");
  const [usersPosts, setUsersPosts] = useState(postsDb);

  const deletePost = (id) => {
    const confirm = window.confirm("Do you really want to delete it?");
    if (confirm) {
      setUsersPosts(usersPosts.filter((post) => post.id !== id));
    }
  };

  const onSearch = (e) => {
    setSearcQuery(e.target.value);
  };

  const onSort = (e) => {
    setSorter(+e.target.value);
  };

  const sortedPosts = useMemo(() => {
    if (sorter) {
      return [...usersPosts].sort((a, b) => b.id - a.id);
    }
    return usersPosts;
  }, [sorter, usersPosts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  return (
    <div className="container">
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
      <div className="row">
        {sortedAndSearchedPosts.map((post, id) => (
          <div className="col-sm-6 mt-3" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {post.id}. {post.title}
                </h5>
                <p className="card-text">{post.body}</p>
                <button
                  onClick={() => deletePost(post.id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
