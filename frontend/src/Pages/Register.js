import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ErrorMessage from "../Components/ErrorMessage";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { register } from "../redux/actions/userActions";
import Steps from "../Components/Steps";

function Register() {
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.UserRegister);
  const { userInformation, error, loading } = userRegister;

  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    if (state.password !== state.confirmPassword) {
      console.error("the password dont match sorry");
      setMessage(true);
    } else {
      dispatch(register(state.name, state.email, state.password));
      setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("The password and the confirmPassword are good");
    }
  };

  useEffect(() => {
    if (userInformation) {
      navigate(redirect);
    }
  }, [navigate, userInformation, redirect]);

  return (
    <div className="register__container">
      <Steps step1 />
      <div className="register__container-customer">
        <h2>INFORMATION PERSONNELLES</h2>
        <div className="register__container-customer-form">
          <form className="register__form" onSubmit={handleSubmit}>
            {loading && <LoaderSpinner src={loadingLogo} />}

            <label className="register__form-label">
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="NOM"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="MOT DE PASSE"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleChange}
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
              CREE UN COMPTE
            </button>

            <p className="register__alreadyUser">Vous avez déjà un compte ?</p>

            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Se connecter
            </Link>

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
    </div>
  );
}

export default Register;
