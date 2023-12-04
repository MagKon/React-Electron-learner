import React from "react";
import { Link } from "react-router-dom";

function NavItem({ children, link, onClick }) {
  return (
    <li className="nav-item" onClick={onClick}>
      <Link className="nav-link" to={link}>
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
