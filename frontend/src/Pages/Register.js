import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ErrorMessage from "../Components/ErrorMessage";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { register } from "../redux/actions/userActions";

function Register() {
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.UserRegister);
  const { userInformation, error, loading } = userRegister;

  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(state.email, state.password));
    setState({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (userInformation) {
      navigate(redirect);
    }
  }, [navigate, userInformation, redirect]);

  return (
    <div className="login__container">
      <div className="login__container-customer">
        <h2>CONNEXION</h2>

        <div className="login__container-customer-form">
          <form className="login__form" onSubmit={handleSubmit}>
            {loading && <LoaderSpinner src={loadingLogo} />}

            <label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="NAME"
                className="login__form-inputs"
              />
            </label>

            <label>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="login__form-inputs"
              />
            </label>

            <label>
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="PASSWORD"
                className="login__form-inputs"
              />
            </label>

            <button className="login__form-button-validate">
              SE CONNECTER
            </button>

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

      <div className="login__container-newCustomer">
        <h2>INSCRIVEZ-VOUS</h2>

        <div className="login__container-newCustomer-bloc">
          <p>
            SI VOUS N'AVEZ PAS ENCORE DE COMPTE D'UTILISATEUR SUR ICHIBBAN,
            UTILISEZ CETTE OPTION POUR ACCÉDER AU FORMULAIRE D'INSCRIPTION.
            <br /> <br />
            NOUS VOUS DEMANDERONS LES INFORMATIONS NOUS PERMETTANT D'ACCÉLÉRER
            LE PROCESSUS D'ACHAT.
          </p>

          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            className="login__form-button-register"
          >
            CREE UN COMPTE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
