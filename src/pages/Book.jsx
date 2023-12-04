import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bookFacade from "../facade/bookFacade";
import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const book = bookFacade.findBook(id) || window.location.replace("/NotFound");

  return (
    <>
      <h1 className="display-4">Book</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <p>Book id: {book?.id}</p>
            <p>Book title: {book?.title}</p>
            <p>Book info: {book?.info}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
