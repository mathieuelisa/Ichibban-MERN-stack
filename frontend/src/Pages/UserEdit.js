import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// import ErrorMessage from "../Components/ErrorMessage";

// import LoaderSpinner from "../Components/LoaderSpinner";
// import loadingLogo from "../Assets/Images/spinner2.gif";

import { getUserDetails } from "../redux/actions/userActions";

function UserEdit() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const userInfo = useSelector((state) => state.UserInfo);
  const { user, error, loading } = userInfo;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user.name || user._id !== id) {
      dispatch(getUserDetails(id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, user, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
                // id="isAdmin"
                // name="isAdmin"
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
  );
}

export default UserEdit;
