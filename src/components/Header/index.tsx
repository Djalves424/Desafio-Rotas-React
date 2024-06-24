import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/home.svg"
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav-main">
          <ul className="menu-items">
            <NavLink
              to={"/home"}
              className={({ isActive }) =>
                isActive ? "menu-active" : "menu-items"
              }
            >
              <li>Início</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? "menu-active" : "menu-items"
              }
            >
              <li>Produtos</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "menu-active" : "menu-items"
              }
            >
              <li>Sobre nós</li>
            </NavLink>
          </ul>
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive ? "menu-active" : "menu-items"
            }
          >
            <img src={homeIcon} alt="Home" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
