import React from "react";
import { globalContextUse } from "./utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, dispatchTheme } = globalContextUse();
  const handleTheme = () => {
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav className={theme.color}>
      <Link to='/home'>Home</Link> {" "}
      <Link to='/contacto'>Contacto</Link> {" "}
      <Link to='/favs'>Favs</Link> {" "}
      <button onClick={handleTheme}>Change theme</button>

    </nav>
  );
};

export default Navbar;