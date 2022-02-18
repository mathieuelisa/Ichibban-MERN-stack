import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ErrorMessage from "../Components/ErrorMessage";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { getUserDetails } from "../redux/actions/userActions";

function Profil() {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.UserInfo);
  const { user, error, loading } = userInfo;

  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!userInformation) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profil"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInformation, user, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Erreur de password");
      setMessage(true);
    } else {
      //DISPATCH UPDATE PROFIL
    }
  };

  return (
    <div className="login__container">
      <div className="register__container-customer">
        <h2>INFORMATIONS PERSONNELLES</h2>
        <div className="register__container-customer-form">
          <form className="register__form" onSubmit={handleSubmit}>
            {loading && <LoaderSpinner src={loadingLogo} />}

            <label className="register__form-label">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="NOM"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="MOT DE PASSE"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="CONFIRMATION DU MOT DE PASSE"
                className="register__form-inputs"
              />
            </label>
            {message ? (
              <ErrorMessage textClassName="redError">
                Veuillez faire en sorte que vos mots de passes correspondent
              </ErrorMessage>
            ) : (
              ""
            )}
            <button className="register__form-button-validate">
              MISE A JOUR
            </button>

            {/* 
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Se connecter
            </Link> */}

            {error ? (
              <>
                <ErrorMessage
                  className="login__container-error"
                  textClassName="test"
                >
                  Une erreur est survenue dans votre mail ou password!
                </ErrorMessage>
              </>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>

      <div className="order__container-customer">
        <h2>MES COMMANDES</h2>
      </div>
    </div>
  );
}

export default Profil;
