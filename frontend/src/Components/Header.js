import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../App.scss";

import { logout } from "../redux/actions/userActions";

function Header() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="header__wrapper">
      <div className="header__container">
        <div className="header__wrapper-logo">
          <NavLink to="/" className="header__wrapper-logo-title">
            <h1>ICHIBBAN</h1>
          </NavLink>
        </div>
        <div className="header__wrapper-icons">
          {userInformation ? (
            <>
              <NavLink className="header__wrapper-links" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <h4 className="header__wrapper-links-title">Panier</h4>
              </NavLink>
            </>
          ) : (
            ""
          )}

          {userInformation ? (
            <div className="dropdown">
              <div className="profil">
                <button className="header__profil">
                  {userInformation.name}
                </button>
                <ul>
                  <Link to="/profil" className="header__profil-choice">
                    Profil
                  </Link>
                  <li className="header__profil-choice" onClick={handleLogout}>
                    Déconnexion
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <NavLink className="header__wrapper-links" to="/login">
              <i className="far fa-user"></i>
              <h4 className="header__wrapper-links-title">Se connecter</h4>
            </NavLink>
          )}

          {userInformation && userInformation.isAdmin ? (
            <div className="dropdown__admin">
              <div className="profil">
                <button className="header__profil">
                  {userInformation.name}
                </button>
                <ul>
                  <Link to="/admin/users" className="header__profil-choice">
                    Utilisateurs
                  </Link>

                  <Link to="/admin/orders" className="header__profil-choice">
                    Commandes
                  </Link>

                  <Link to="/admin/products" className="header__profil-choice">
                    Produits
                  </Link>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
