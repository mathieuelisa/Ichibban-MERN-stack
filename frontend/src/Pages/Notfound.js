import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound__container">
      <h2 className="notfound__container-mainTitle">
        Désolé, la page que vous cherchez n'éxiste pas
      </h2>
      <h4>
        Choix numéro 1 : Vous mettez vos <i class="fa-solid fa-glasses"></i>{" "}
        pour verifier l'URL.
      </h4>
      <h4>
        Choix numéro 2 : Vous cliquez{" "}
        <Link to="/" className="notfound__container-link">
          ici
        </Link>{" "}
        afin d'être rediriger.
      </h4>
    </div>
  );
}

export default NotFound;
