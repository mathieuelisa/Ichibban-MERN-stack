import { Link } from "react-router-dom";

function Steps({ step1, step2, step3, step4 }) {
  return (
    <div className="steps__container">
      {step1 ? (
        <Link to={"/register"} className="steps__container-item-valide">
          S'enregister
        </Link>
      ) : (
        <Link to={"/register"} className="steps__container-item-notValide">
          S'enregister
        </Link>
      )}

      {step2 ? (
        <Link to={"/login/shipping"} className="steps__container-item-valide">
          Adresse de livraison
        </Link>
      ) : (
        <Link
          to={"/login/shipping"}
          className="steps__container-item-notValide"
        >
          Adresse de livraison
        </Link>
      )}

      {step3 ? (
        <Link to={"/payment"} className="steps__container-item-valide">
          Paiement
        </Link>
      ) : (
        <Link to={"/payment"} className="steps__container-item-notValide">
          Paiement
        </Link>
      )}

      {step4 ? (
        <Link to={"/order"} className="steps__container-item-valide">
          Aperçu de la commande
        </Link>
      ) : (
        <Link to={"/order"} className="steps__container-item-notValide">
          Aperçu de la commande
        </Link>
      )}
    </div>
  );
}

export default Steps;
