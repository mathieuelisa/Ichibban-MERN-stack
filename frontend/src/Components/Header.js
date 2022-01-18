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
            <i className="fas fa-shopping-cart"></i>
            <h4 className="header__wrapper-links-title">Panier</h4>
          </NavLink>

          <NavLink className="header__wrapper-links" to="/login">
            <i className="far fa-user"></i>
            <h4 className="header__wrapper-links-title">Se connecter</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
