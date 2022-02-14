import { useState } from "react";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state);

  return (
    <div className="login__container">
      <div className="login__container-customer">
        <h2>CONNEXION</h2>

        <div className="login__container-customer-form">
          <form className="login__form">
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

          <button className="login__form-button-register">
            CREE UN COMPTE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
