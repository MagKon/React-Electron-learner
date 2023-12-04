import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bookFacade from "../facade/bookFacade";
import { useOutletContext } from "react-router-dom";

function AddBook() {
  const [books, setBooks] = useOutletContext() || [];

  function addBook() {
    const title = document.getElementById("title").value;
    const info = document.getElementById("info").value;
    const book = { title, info };
    bookFacade.addBook(book);
    setBooks([...books, book]);
  }

  return (
    <>
      <h1 className="display-4">Add Book</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="title" style={{ fontWeight: "bold" }}>
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="info" style={{ fontWeight: "bold" }}>
                Info
              </label>
              <input
                type="text"
                className="form-control"
                id="info"
                placeholder="Enter info"
              />
            </div>
            <button className="btn btn-primary" onClick={addBook}>
              Add Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBook;
