// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/books";
import Book from "./pages/Book";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/books" element={<Books />}>
            <Route path=":id" element={<Book />} />
            <Route path="addbook" element={<AddBook />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
