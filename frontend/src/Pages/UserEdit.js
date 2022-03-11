import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import LoaderSpinner from "../Components/LoaderSpinner";
// import loadingLogo from "../Assets/Images/spinner2.gif";

import ErrorMessage from "../Components/ErrorMessage";

import {
  getUserDetails,
  updateUser,
  USER_UPDATE_RESET,
} from "../redux/actions/userActions";

function UserEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const userInfo = useSelector((state) => state.UserInfo);
  const { user } = userInfo;

  const userUpdate = useSelector((state) => state.UserUpdate);
  const { success: successUpdating, error: errorUpdating } = userUpdate;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (successUpdating) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/users");
    } else {
      if (!user.name || user._id !== id) {
        dispatch(getUserDetails(id));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, user, id, navigate, successUpdating]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: id, name, email, isAdmin }));
  };

  const handleBackButton = () => {
    navigate("/admin/users");
  };

  return (
    <>
      {errorUpdating && (
        <ErrorMessage textClassName="redError">
          Une erreur est survenue
        </ErrorMessage>
      )}
      <div className="userEdit__back">
        <h4 className="userEdit__back-title" onClick={handleBackButton}>
          Retour
        </h4>
      </div>
      <div className="login__container">
        <div className="register__container-customer">
          <h2>EDIT USER</h2>
          <div className="register__container-customer-form">
            <form className="register__form" onSubmit={handleSubmit}>
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
                  type="checkbox"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
                is Admin
              </label>

              <button className="register__form-button-validate">
                MISE A JOUR
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEdit;
