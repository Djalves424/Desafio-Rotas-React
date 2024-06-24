import { NavLink } from "react-router-dom";
import "./styles.css";

export default function CardNav() {
  return (
    <div className="container mt30 mb30 card-nav">
      <nav className="nav-main">
        <ul className="menu-items">
          <NavLink
            to={"computers"}
            className={({ isActive }) =>
              isActive ? "menu-active" : "menu-items"
            }
          >
            <li>Computadores</li>
          </NavLink>
          <NavLink
            to={"electronics"}
            className={({ isActive }) =>
              isActive ? "menu-active" : "menu-items"
            }
          >
            <li>Eletrônicos</li>
          </NavLink>
          <NavLink
            to={"books"}
            className={({ isActive }) =>
              isActive ? "menu-active" : "menu-items"
            }
          >
            <li>Livros</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
