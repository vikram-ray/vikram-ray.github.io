import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, TopMenu} from "../../portfolio";

function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {TopMenu.map(menu=><li id={menu.id} ><a href={menu.id}>{menu.name}</a></li>)}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
