import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/context";

const NavBar = () => {
  const [viewMobileMenu, setViewMobileMenu] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Users",
      link: "/users",
    },
    {
      name: "Posts",
      link: "/posts",
    },
    {
      name: "Photos",
      link: "/photos",
    },
    {
      name: "Counter",
      link: "/counter",
    },
  ];

  const viewMenu = () => {
    setViewMobileMenu(!viewMobileMenu);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            LOGO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={viewMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-start ${
              viewMobileMenu ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link to={link.link} className="nav-link" onClick={viewMenu}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {auth.session ? (
              <div
                className={`collapse navbar-collapse justify-content-end ${
                  viewMobileMenu ? "show" : ""
                }`}
              >
                <div className="btn">
                  <span className="badge rounded-pill bg-light text-dark">
                    {auth.user}
                  </span>
                </div>

                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setAuth({ session: false, user: "" })}
                >
                  LogOut
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
