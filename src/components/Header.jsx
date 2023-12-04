import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#/books">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/books"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending nav-link"
                      : isActive
                      ? "active nav-link"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/books/addbook"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending nav-link"
                      : isActive
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Add a book
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link to={"/books/" + search}>Search</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
