import "../App.scss";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <div className="header__wrapper-logo">
          <h1>ICHIBBAN</h1>
        </div>
        <div className="header__wrapper-icons">
          <a className="header__wrapper-links" href="/cart">
            Panier
          </a>
          <a className="header__wrapper-links" href="/login">
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
