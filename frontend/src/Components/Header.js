import { NavLink } from "react-router-dom";
import "../App.scss";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <div className="header__wrapper-logo">
          <NavLink to="/" className="header__wrapper-logo-title">
            <h1>ICHIBBAN</h1>
          </NavLink>
        </div>
        <div className="header__wrapper-icons">
          <NavLink className="header__wrapper-links" to="/cart">
            <h4>Panier</h4>
          </NavLink>

          <NavLink className="header__wrapper-links" to="/login">
            <h4>Se connecter</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
