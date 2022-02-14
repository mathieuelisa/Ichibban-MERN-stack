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
          <form>
            <label>
              email
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </label>

            <label>
              password
              <input
                type="text"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </label>
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
        </div>
      </div>
    </div>
  );
}

export default Login;
