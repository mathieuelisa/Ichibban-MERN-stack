import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ErrorMessage from "../Components/ErrorMessage";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import {
  getUserDetails,
  updateUserProfil,
  USER_UPDATE_PROFIL_RESET,
} from "../redux/actions/userActions";

import { listMyOrders } from "../redux/actions/orderActions";

function Profil() {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.UserInfo);
  const { user, error, loading } = userInfo;

  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  const userUpdateProfil = useSelector((state) => state.UserUpdateProfil);
  const { success } = userUpdateProfil;

  const orderListMy = useSelector((state) => state.OrderListMy);
  const {
    order: orderList,
    loading: loadingList,
    error: errorList,
  } = orderListMy;

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
      if (!user || !user.name || success) {
        dispatch({
          type: USER_UPDATE_PROFIL_RESET,
        });
        dispatch(getUserDetails("profil"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInformation, user, dispatch, success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Erreur de password");
      setMessage(true);
    } else {
      dispatch(updateUserProfil({ id: user._id, name, email, password }));
    }
  };

  return (
    <div className="login__container">
      <div className="register__container-customer">
        <h2 className="userList__container-title">INFORMATIONS PERSONNELLES</h2>
        <div className="register__container-customer-form">
          <form className="register__form" onSubmit={handleSubmit}>
            {loading && (
              <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
            )}

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

            {success ? (
              <ErrorMessage textClassName="greenError">
                Votre profil a été mis à jour
              </ErrorMessage>
            ) : (
              ""
            )}

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
        <div>
          <table className="tableau-style">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Prix total</th>
                <th>Date de paiement</th>
                <th>Livraison</th>
                <th>Infos</th>
              </tr>
            </thead>

            {loadingList && (
              <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
            )}
            <tbody>
              {orderList?.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element._id}</td>
                    <td>{element.createdAt.substring(0, 10)}</td>
                    <td>{element.totalPrice} €</td>
                    <td>
                      {element.isPaid ? (
                        element.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {element.isDelivered ? (
                        <i
                          className="fa-solid fa-check"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>details</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profil;
