import React, { useState } from "react";
import Day from "./Day";
import Night from "./Night";

function ThemeIcon() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  function changeTheme() {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    window.location.reload();
  }

  return (
    <>
      {theme === "dark" && <Night onChangeTheme={changeTheme} />}
      {theme === "light" && <Day onChangeTheme={changeTheme} />}
    </>
  );
}

export default ThemeIcon;
