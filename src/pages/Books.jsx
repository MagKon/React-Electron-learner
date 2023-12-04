import React, { useEffect, useState } from "react";
import bookFacade from "../facade/bookFacade";
import { NavLink, Outlet } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState(bookFacade.getBooks());
  useEffect(() => {
    setBooks(bookFacade.getBooks());
  }, [books]);

  return (
    <>
      <h1>Books</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>
                  <NavLink
                    to={"" + book.id}
                    relative="path"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending nav-link"
                        : isActive
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    {book.title}
                  </NavLink>
                </td>
                <td>{book.info}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet context={[books, setBooks]} />
    </>
  );
}

export default Books;
