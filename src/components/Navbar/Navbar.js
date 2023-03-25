import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import { RiMenu3Line, RiCloseLin, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        Data<font>EX</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {/* <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
        {clicked ? (
          <RiCloseLine className="fas close"></RiCloseLine>
        ) : (
          <RiMenu3Line className="fas open"></RiMenu3Line>
        )}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;
