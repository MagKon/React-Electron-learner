import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CardMaker from "./pages/CardMaker";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import GameBoard from "./pages/GameBoard";

function App() {
  document
    .getElementsByTagName("body")[0]
    .setAttribute(
      "data-bs-theme",
      localStorage.getItem("theme") || localStorage.setItem("theme", "dark")
    );

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/maker" Component={CardMaker} />
          <Route path="/mainpage" Component={MainPage} />
          <Route path="/game" Component={GameBoard} />
          <Route path="/game/:id" Component={GameBoard} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
