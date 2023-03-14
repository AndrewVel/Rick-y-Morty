import { NavLink } from "react-router-dom";
import s from "./Nav.Module.css";
const NavBar = () => {
  return (
    <div className={s.navbar}>
      <nav>
        <ul>
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
      </nav>
    </div>
  );
};

export default NavBar;
