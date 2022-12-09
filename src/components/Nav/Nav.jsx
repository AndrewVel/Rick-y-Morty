import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <div className={styles.contenedorUL}>
        <ul className={styles.menu}>
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>Favorites</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.contSearch}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
